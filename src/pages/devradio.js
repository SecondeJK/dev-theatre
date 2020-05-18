import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import H5 from '../components/H5';
import AUDIO from "../components/Audio";
import P from "../components/P";
import jim from "../../static/jimrecords.jpg"

function DevRadio() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Radio Podcast</H1>
                <img src={jim}></img>
                <P>I started collecting records back when I was 16, and found myself lost in all 
        kinds of influences due to the DJs I would hear. So, in an attempt to replicate my heroes such as
        Gilles Peterson, Andrew Weatherall, John Peel and Coldcut/Solid Steel, here is The Dev Radio, a 
        show straight out the basement of your local record shop.</P>
                <br/>
                <div>
                    <P>010</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+010.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>009</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+009.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>008</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+008.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>007</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+008.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>006</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+006.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>005</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+005.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>004</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+004.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>003</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+003.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>002</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+002.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
                <div>
                    <P>001</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+001.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                    <H5>Tracklist</H5>
                    <ul>
                        <li>Ennio Morricone - L'estasi dell'oro [Capitol, 1966]</li>
                        <li>The Revolutionary Corps Of Teenage Jesus - Protection Rat [Creeping Bent, 1999]</li>
                        <li>Toydrum - Precinct 21 [Self-released/Underscore Collective, 2014]</li>
                        <li>Wolf Alice - Don't Delete the Kisses [Dirty Hit, 2017]</li>
                        <li>Tha 4orce - Save the Children feat. Lady Sanity [King of the Beats, 2017]</li>
                        <li>Slade - Coz I Luv U [Polydor, 1971]</li>
                        <li>Illbilly Hitec - Chase [Echo Beach, 2019]</li>
                        <li>Joe Pesci - Wise Guy [Columbia, 1998]</li>
                        <li>Kaytranada - 10% [RCA, 2019]</li>
                        <li>Mötley Crüe - Mutherfucker of the Year [Mötley Records, 2008]</li>
                        <li>Unloved - Heartbreak [Heavenly, 2019]</li>
                        <li>Clark - Legacy Pet [Throttle, 2019]</li>
                        <li>George Michael - Shoot the Dog [Polydor, 2002]</li>
                        <li>Richard File - Now or Never [1231485 Records DK, 2019]</li>
                        <li>Death Cab for Cutie - Autumn Love [Atlantic, 2018]</li>
                        <li>Logistics - Rhythm Track [Hospital, 2019]</li>
                        <li>Broadcast - Before We Begin [Warp, 2003]</li>
                        <li>Expensive Soul - O Amor É Mágico [Vidisco, 2010]</li>
                        <li>Octa Octa - Can You See Me? [T4T LUV NRG, 2019]</li>
                        <li>Simple Minds - Summer [BMG, 2017]</li>
                        <li>sleepmakeswaves - Children [Unreleased, 2017]</li>
                        <li>Wendy & Bonnie - By The Sea [Skye Records, 1969]</li>
                    </ul>
                </div>
            </Container>
        </Layout>
    );
}

export default DevRadio;
