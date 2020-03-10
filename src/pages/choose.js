import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import P from "../components/P";
import Card from "../components/Card";
import H2 from "../components/H2";

function Choose() {
    return (
        <Layout>
            <Container>
                <H1>Podcasts</H1>
                <P>I host two podcasts, The Dev Theatre Podcast which focuses on tech, tech culture and Developer
                Relations, and The Dev Radio Podcast where I play records I like (or sometimes don't like, but
                find interesting). Both are currently in development.</P>
                <br/>
                <a href={'/devradio'}><H2>The Dev Radio</H2></a>
                <H2>The Dev Theatre Podcast (In Production)</H2>
            </Container>
        </Layout>
    );
}

export default Choose;