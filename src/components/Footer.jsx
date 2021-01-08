import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <ContentWrapper>
          <FooterColumn1>
            <h2>GYMFIT</h2>
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
                <p>30 february 2019</p>
              </LinkContainer>
              <LinkContainer>
                <p>Claritas est etiam processus dynamicus</p>
                <p>30 february 2019</p>
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

const MainContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 45px;
  background: #181a23;

  p, li {
    color: #fff;
    font-size: 14px;
    line-height: 25.2px;
    margin-bottom: 1rem;
    margin-top: 0;
    opacity: 0.8;
    text-align: left;
  }
`;
const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 80%;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex-direction: row;
`;
const FooterColumn1 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  h2 {
    box-sizing: border-box;
    color: #fff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 38px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-align: left;
    text-transform: uppercase;
  }

  
`;
const FooterColumn2 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const FooterContentWrapper = styled.div``;
const FooterColumn3 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  @media (min-width: 992px) {
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
  }
`;
const FooterColumn4 = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }

  @media (min-width: 992px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const LinkContainer = styled.div``;

const FooterColumnTitle = styled.h4`
color: #fff;
font-family: "Barlow Condensed",sans-serif;
font-size: 18px;
font-weight: 700;
letter-spacing: 1px;
line-height: 30px;
margin-bottom: 1.5rem;
margin-top: 0;
text-align: left;
text-transform: uppercase;
`