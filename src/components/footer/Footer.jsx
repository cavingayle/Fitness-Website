import React from "react";
import {
  MainContainer,
  Container,
  ContentWrapper,
  FooterColumn1,
  FooterColumn2,
  FooterContentWrapper,
  FooterColumnTitle,
  LinkContainer,
  FooterColumn3,
  FooterColumn4
} from "./style";

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <ContentWrapper>
          <FooterColumn1>
            <h2>LangFit</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus illo ad quo sunt maiores, sint nostrum omnis eaque
              cumque dolorum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </FooterColumn1>
          <FooterColumn2>
            <FooterContentWrapper>
              <FooterColumnTitle>RECENTS POSTS</FooterColumnTitle>
              <LinkContainer>
                <p>Claritas est etiam processus dynamicus</p>
                <p>30 february 2021</p>
              </LinkContainer>
              <LinkContainer>
                <p>Claritas est etiam processus dynamicus</p>
                <p>30 february 2021</p>
              </LinkContainer>
            </FooterContentWrapper>
          </FooterColumn2>
          <FooterColumn3>
            <FooterContentWrapper>
              <FooterColumnTitle>QUICK LINKS</FooterColumnTitle>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Membership</li>
                <li>Courses</li>
                <li>Contact Us</li>
              </ul>
            </FooterContentWrapper>
          </FooterColumn3>
          <FooterColumn4>
            <FooterContentWrapper>
              <FooterColumnTitle>HOME LOCATION</FooterColumnTitle>
              <p>Washington 6036 Richmond hwy., Alexandria, VA USA 22303</p>
              <span>+1 (409) 987–5874 info@demolink.org</span>
            </FooterContentWrapper>
          </FooterColumn4>
        </ContentWrapper>
      </Container>
    </MainContainer>
  );
};

export default Footer;
