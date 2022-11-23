import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillPhone, AiFillMessage } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:414-388-3430'>
            <AiFillPhone size='3rem' />
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:bentley.shannon@yahoo.com'>
            <AiFillMessage size='3rem' />
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
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
