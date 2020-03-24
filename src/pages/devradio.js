import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
import AUDIO from "../components/Audio";
import P from "../components/P";

function DevRadio() {
    return (
        <Layout>
            <Container>
                <H1>The Dev Radio Podcast</H1>
                <P> Welcome to The Dev Radio! A music show straight from the basement of your local record shop.</P>
                <br/>
                <div>
                    <P>001</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+001.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                    <form method="get" action="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+001.mp3">
                        <input type="submit" value="Download" />
                    </form>
                </div>
                <div>
                    <P>002</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+002.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                    <form method="get" action="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+002.mp3">
                        <input type="submit" value="Download" />
                    </form>
                </div>
                    <P>003</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+003.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                    <form method="get" action="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+003.mp3">
                        <input type="submit" value="Download" />
                    </form>
                </div>
            </Container>
        </Layout>
    );
}

export default DevRadio;
