import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMediumCircle, AiFillPhone, AiFillMessage } from 'react-icons/ai';
import { SectionTitle } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id='contact'>
      <SectionTitle>Contact Me</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:414-388-3430'>
            <AiFillPhone size='3rem' /> +1 414.388.3430
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:bentley.shannon@yahoo.com'>
            <AiFillMessage size='3rem' /> Send Email
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>theGlamTechie &copy; 2022</Slogan>
        </CompanyContainer>
          <SocialContainer>
            <SocialIcons href='https://github.com/shay90210'>
              <AiFillGithub size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://www.linkedin.com/in/shannontatibentley/'>
              <AiFillLinkedin size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://twitter.com/ShannonTatianna'>
              <AiFillTwitterCircle size='3rem' />
            </SocialIcons>
            <SocialIcons href='https://medium.com/@theGlamTechie_1991'>
              <AiFillMediumCircle size='3rem' />
            </SocialIcons>
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
