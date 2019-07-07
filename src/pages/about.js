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
            My whole life has been straddling the worlds of theatre, writing and
            software development. As an Developer Advocate, I see an
            emerging new world of software development that needs shouting about,
            that needs shaping to find it's way and that needs to fit into a digital
            puzzle of diciplines.
          </P>
          <P>
            I'm a graduate in English Literature and Theatre, and have been an
            actor, a Technical Manager at a London theatre, A Data Analyst with
            Microsoft & Oracle SQL tooling and a Web Developer. At one time I
            pretended to be a DJ.
          </P>
          <P>
            I run Birmingham's PHP usergroup, brumPHP, and co-run a quarterly tech
            conference, Fusion Birmingham. I write microservices for Shopify in
            Laravel and Vue.js for EastsideCo in Digbeth, Birmingham.
          </P>
        </Container>
      </Wrapper>
    </Layout>
  );
}

export default About;
