import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import P from "../components/P";
import setup from "../../static/devtheatre-setup.jpg";

function DevTheatrePodcast() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Theatre Podcast</H1>
                <br/>
                <img src={setup}></img>
                <P>DevOps, Developer Relations, Tech Culture,
                    Nonsense - join me in episodes of the Dev Theatre Podcast, where I'll speak to my peers.</P>
            </Container>
        </Layout>
    );
}

export default DevTheatrePodcast;