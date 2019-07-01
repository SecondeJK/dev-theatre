import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import H2 from '../H2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, social, tagline } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <H2>{tagline}</H2>
        <P>{description}</P>
        {social &&
          <Social
            about={social.about}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;