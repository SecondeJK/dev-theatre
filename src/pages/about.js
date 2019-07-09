import React from "react";
import styled from "styled-components";

import H2 from "../components/H2";
import P from "../components/P";
import Container from '../components/Container';
import Layout from "../templates/layout";

const Wrapper = styled.div`
  text-align: center;
`;

const TextBody = styled.div`
  text-align: left;
  font-size: 14px;
`;

function About() {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <H2>Hi, I'm James!</H2>
          <TextBody>
            <p>
              From Theatre Graduate, to QA, to SQL Data Analytics, to Web Developer, to Developer Advocate.
              From the stage and back to the stage, I sit in a happy medium between tech and theatre. I also
              pretended to be a <a href="https://drive.google.com/open?id=0B2almTqbTKrIeDBMUjNMRkNITDQ">DJ</a> on the way.
            </p>
            <p>
              I run Birmingham's PHP usergroup, brumPHP, and co-run a quarterly tech
              conference, Fusion Birmingham. I write microservices for Shopify in
              Laravel and Vue.js for Eastside Co in Digbeth, Birmingham. I speak on tech and culture.
            </p>
          </TextBody>
        </Container>
      </Wrapper>
    </Layout>
  );
}

export default About;
