import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call me.</LinkTitle>
        <LinkItem href='tel:+447788-269297'>+447788-269297</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:mark.b.ruth@hotmail.co.uk'>mark.b.ruth@hotmail.co.uk</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building websites that are both beautiful and functional.</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/markruth2nd"> 
      <AiFillGithub  size="3rem"/> {/* This will give me the Github Icon which will link to the link I have provided in the href */}
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mark-baldry-144725270/"> 
      <AiFillLinkedin  size="3rem"/> {/* This will give me the LinkedIn Icon which will link to the link I have provided in the href */}
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/"> 
      <AiFillInstagram size="3rem"/> {/* This will give me the Instagram Icon which will link to the link I have provided in the href */}
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
