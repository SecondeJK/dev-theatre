import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import P from "../components/P";

function DevRadio() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Radio Podcast</H1>
                <P>The Dev Radio Podcast is currently in development, and will contain 1hr 30min sessions of my rather
                eclectic musical tastes.</P>
            </Container>
        </Layout>
    );
}

export default DevRadio;