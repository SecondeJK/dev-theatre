import React from "react";
import Layout from "../templates/layout";
import Container from '../components/Container';
import H1 from '../components/H1';
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
        kinds of influences due to the DJs I would hear. So, in an attempt to replicate my heroes s
        uch as Gilles Peterson, Andrew Weatherall, John Peel and Coldcut/Solid Steel, here is The Dev Radio, a 
        show straight out the basement of your local record shop.</P>
                <br/>
                <div>
                    <P>001</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+001.mp3">
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
                    <P>003</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+003.mp3">
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
                    <P>005</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+005.mp3">
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
                    <P>007</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+007.mp3">
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
                    <P>009</P>
                    <AUDIO
                        controls
                        src="https://devtheatre.s3-eu-west-1.amazonaws.com/The+Dev+Radio+009.mp3">
                        Your browser does not support the
                        <code>audio</code> element.
                    </AUDIO>
                </div>
            </Container>
        </Layout>
    );
}

export default DevRadio;
