import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import P from "../components/P";

function DevTheatrePodcast() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Theatre Podcast</H1>
                <P>The Dev Radio Podcast is currently under development, and will contain 30 minute interview slots
                    with leading figures in the world of Developer Relations, Tech culture and Engineering.</P>
            </Container>
        </Layout>
    );
}

export default DevTheatrePodcast;