import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import P from "../components/P";
import setup from "../../static/devtheatre-setup.jpg";
import AUDIO from "../components/Audio";
import H2 from "../components/H2";
import PL from "../components/PL";

function DevTheatrePodcast() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Theatre Podcast</H1>
                <br/>
                <img src={setup}></img>
                <P>DevOps, Developer Relations, Tech Culture, Engineering,
                    Nonsense - join me in episodes of the Dev Theatre Podcast, where I'll speak to my peers around me on tech stuff.</P>
                <br/>
                <div>
                    <H2>Episode 1: On Javascript & The Future with Stuart Langridge</H2>
                    <PL>Expanding on his talk "You Really Don't Need All That Javascript",
                        listen to chat about npm, dependency management, Deno, and standard libraries.</PL>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Theatre+1.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>>
                </div>
            </Container>
        </Layout>
    );
}

export default DevTheatrePodcast;