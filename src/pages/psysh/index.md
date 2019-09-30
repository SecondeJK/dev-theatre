---
title: PsySh - More than just REPL
date: "2019-09-29"
featuredImage: './commandline.png'
---

A wildly underused tool for a full application shell.

<!-- end -->

Most backend developers know about interactive modes, that certainly isn’t a secret.

```jimseconde@jim-amd-u18$: php -a```

```jimseconde@jim-amd-u18$: node```

```jimseconde@jim-amd-u18$: python3```

All give you an active interpreter for that respective language. It’s used mostly for testing or confirming behaviour on the fly - ironically because you have a mountain of code in the middle of your app, your linter isn’t picking up on anything suspicious and exceptions are being thrown where you don’t want. Perhaps you want to look at how something is type juggling instead - again, your linter can’t help you with that.

##### PHP
```
jimseconde@jim-amd-u18$: php -a
> $foo = '342';
> $bar = 'give me a string';
> var_dump($foo + $bar);
```
##### Node
```
jimseconde@jim-amd-u18$: node
> console.log(234 / 3)
```

##### Python3
```
jimseconde@jim-amd-u18$: python3
> print('give me a string' . 3424)
```

While an active interpreter is useful, it has one major limitation: it’s the standard 
library of functions of a language, not a framework or your whole application's code.
So we’d have to import anything we want to test line by line:

##### Node

```
jimseconde@jim-amd-u18$: node
> barkNoise = 'woof'
> console.log(bark(barkNoise))
ReferenceError: bark is not defined
> import { bark } from './app/some_functions/myFunctions.js'
> console.log(bark(barkNoise))
woof
```

#### PHP: How PSR-4 & Composer changed how we code in PHP

While it looks like a daunting name, PSR-4 is just the specification for how code is structured, 
allowing a modular component system in your php app. At runtime, composer uses an autoloader 
system to get every class you’ve got in your app and loads it into that php thread in memory. 
This is why when you code something in, for example, [Slim](https://www.slimframework.com), [Laravel](https://laravel.com) or [Symfony](https://symfony.com), you can use an 
import to get a class from -somewhere else- in your app, and because of autoloading, it’s 
available during runtime.

#### From PHP interactive shell to PsySh

We’ve already established that `php -a` just spins up a raw shell. But - what if we 
could spin up a shell that uses composer’s autoloader to throw the whole app into memory, 
then gives you your command line? If you did that, every single class and all the 
functionality of your app sudden becomes available!

This is exactly what PsySh does. In [Symfony](https://symfony.com) or [Slim](https://www.slimframework.com), you can get it using composer: 
`composer require psy/psysh`. In [Laravel](https://laravel.com), a version of it comes out of the box, named `tinker`. 
You can fire it up using `php artisan tinker`.

It's also worth noting that in tinker, not only has composer autoloaded every class, it's also fired Laravel's entry point to the app, including all of the bootstrapped features - so, features like the Service Container and Config are available:

```
jimseconde@jim-amd-u18$: php artisan tinker
>>> config('app.my_awesome_variable');
>>> $myPusherService = app()->make('PusherService');
>>> $myPusherService->pushToQueue(['send me']);
```

#### More than debugging: 4 use cases

PsySh is usually described as a debugger, but I’d say it’s a lot more powerful than that. Let’s 
have a look at four areas it can be used to interact with our apps:

##### Shopify API library

In previous blog posts, [I've written how to use composer to get a REST API wrapper.](https://devtheatre.net/shopify-laravel).
The wrapper is used to fetch and push whatever your app requires 
in its business logic to interact with a Shopify store (in this case). It’s baked into your app’s code though, 
so using something like [Postman](https://www.getpostman.com) or [Insomnia](https://insomnia.rest) to manually query the API would be better suited for 
quick queries. With PsySh though, the API is now -just available-. Even better, you may
 have extended the API wrapper with bespoke functionality - now that’s available too. For example:
 
```
jimseconde@jim-amd-u18$: php artisan tinker
>>> $api = new \EastsideCo\Shopify();
>>> $shopifyProduct = $api->get('admin/products/324235.json')->products;
>>> $localProduct = new \App\Product::create($shopifyProduct);
>>> $localProduct->save();
```

You'll notice that PsySh also gives you interactive feedback. If you call the Eloquent `save()` function for instance,
as long as the entity passes validation, it will return and print true below. In the case of an API response or the
result of a database query, it'll return and print a json array of the response, even if it's been set to a variable.

Your API class instance is generated the same way it would have been if 
you were running the whole application at runtime (because, as everything has been 
loaded in PsySh, technically this is exactly what has happened). So, whatever custom 
methods you’ve coded are now available - for example:

```
>>> $blogPayload = ['09012938','My new blog post'];
>>> \App\API::createBlogPost($blogPayload);
true
>>> $api->fetchImagesByVariantId('90812309')
```
 
##### Laravel’s Eloquent ORM interaction

The main usage you’ll see of Laravel’s inclusion of PsySh is in the ORM documentation, and 
it’s a good example of where it’s extremely powerful. With 
the ORM loaded completely into your command line, you can use any extended 
custom functionality you’ve built into your ORM and test it. 
This now effectively completely removes the need to access 
your database’s command line - you can even write raw SQL 
into the ORM and run that.

Examples:
```
jimseconde@jim-amd-u18$: php artisan tinker
>>> \DB::select(SELECT * FROM products WHERE id = 4)->get();
>>> \App\Product::find(342)
>>> \App\Variants::where('sku', 'like', 'TABLE1')->get();
```

##### Laravel’s Storage driver

Here’s another example of where PsySh can be really powerful. 
Every Laravel class that comes with the Framework is now available - so, let’s 
take the File Storage system that is built on top of the powerful [Flysystem](https://flysystem.thephpleague.com/docs) PHP library. 
Let’s imagine you need to extract a specific SQL query for data analysis.

```
>>> $dataQuery = \DB::('SELECT a.id, a.title, b.title, b.price, b.sku from products a INNER JOIN variants b on a.id = b.product_id')->get();
>>> // $dataQuery is a select query returned as a .json
>>> // dump out the data to the storage path
>>> \Storage::disk('local')->put('datadump.json', $dataQuery);
```

On your server, your query result json is now written to `/storage/app` 
(if you’ve still using the defaults, otherwise it will be written to the 
configured path for the local driver). 

We’ve just the local driver here, but if you want to you can use any of 
the other drivers - such as the AWS S3 one. Want to send the same
 payload into an S3 bucket? Sure!

```
>>> \Storage::disk('s3')->put('datadump.json', $dataQuery);
```

##### Dispatching Jobs or Events

If your app makes extensive use of the Job queue system (currently
I use AWS’s SQS messaging system for Job queues, and use [Redis](https://redis.io) for broadcasting 
events over websockets) or has a more a complex Event-driven architecture system, 
you can use PsySh to do routine maintenance or to debug the application structure. 
Here’s an example of fetching an order by the API, then firing an event to the queue listeners:

```
>>> $orderToCancel = $api->get('admin/orders/32448.json');
>>> // fire event to the queue to cancel the job
>>> Event::dispatch(new CancelOrderJob($orderToCancel));
```

I've found the power of an interactive shell like this to be invaluable in day-to-day operations. For more
information on PsySh and tinker, check out the docs and repos:

https://psysh.org/

https://github.com/bobthecow/psysh

https://github.com/laravel/tinker

To see an example of the same kind of enhanced REPL power outside of PHP, I recommend having a look at how Python's [Django](https://www.djangoproject.com) implements the same patterns using `./manage.py shell_plus --ipython`.

Happy shelling!
