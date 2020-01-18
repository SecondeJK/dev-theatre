import React from "react";
import styled from "styled-components";

import H2 from "../components/H2";
import P from "../components/P";
import Container from '../components/Container';
import Layout from "../templates/layout";

const Wrapper = styled.div`
  text-align: center;
`;

function About() {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <H2>Hi, I'm James!</H2>
            <P>
              From Theatre Graduate, to QA, to SQL Data Analytics, to Web Developer, to Developer Advocate.
              From the stage and back to the stage, I sit in a happy medium between tech and theatre. I also
              pretended to be a <a href="https://drive.google.com/open?id=0B2almTqbTKrIeDBMUjNMRkNITDQ">DJ</a> on the way.
            </P>
            <P>
              I founded Birmingham's current PHP usergroup, brumPHP, and co-run a quarterly tech
              conference, Fusion Birmingham. I teach under-represented groups of people at Codebar.
              I write microservices for Shopify integrations in
              Laravel and Vue.js deployed to AWS. I speak on tech and culture, and study Developer Relations strategy & implementation.
            </P>
        </Container>
      </Wrapper>
    </Layout>
  );
}

export default About;
