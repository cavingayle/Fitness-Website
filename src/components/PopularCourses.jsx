import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { Link } from "react-dom";

const PopularCourses = () => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <HeaderContainer>
            <HeaderContentWrapper>
              <StyledDiv></StyledDiv>
              <h2>POPULAR COURSES</h2>
              <p>
                We offer more than 35 group exercis, aerobic classes each week.
              </p>
            </HeaderContentWrapper>
          </HeaderContainer>
        </Header>
        <Body>
          <BodyContainer>
            <BodyWrapper>
              <img
                src="https://demo.themefisher.com/gymfit/images/gallery/course-1.jpg"
                alt=""
              />
              <BodyContent>
                <h4>Build Body</h4>
                <p>Mentor: Jimmy Carter</p>
              </BodyContent>
            </BodyWrapper>
          </BodyContainer>
          <BodyContainer>
            <BodyWrapper>
              <img
                src="https://demo.themefisher.com/gymfit/images/gallery/course-1.jpg"
                alt=""
              />
              <BodyContent>
                <h4>Build Body</h4>
                <p>Mentor: Jimmy Carter</p>
              </BodyContent>
            </BodyWrapper>
          </BodyContainer>
          <BodyContainer>
            <BodyWrapper>
              <img
                src="https://demo.themefisher.com/gymfit/images/gallery/course-1.jpg"
                alt=""
              />
              <BodyContent>
                <h4>Build Body</h4>
                <p>Mentor: Jimmy Carter</p>
              </BodyContent>
            </BodyWrapper>
          </BodyContainer>
          <BodyContainer>
            <BodyWrapper>
              <img
                src="https://demo.themefisher.com/gymfit/images/gallery/course-1.jpg"
                alt=""
              />
              <BodyContent>
                <h4>Build Body</h4>
                <p>Mentor: Jimmy Carter</p>
              </BodyContent>
            </BodyWrapper>
          </BodyContainer>
        </Body>
        <Footer>
          <FooterContainer>
            <FooterWrapper>
              <Button>See All Our Courses</Button>
            </FooterWrapper>
          </FooterContainer>
        </Footer>
      </Container>
    </MainContainer>
  );
};

export default PopularCourses;

const MainContainer = styled.div`
  padding: 100px 0;
  background: #f0f2f4;
`;
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  max-width: 1140px;

  padding: 2em;
  width: 80%;
`;
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const HeaderContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  /* width: 100%; */
  margin: 0 auto;
`;

const HeaderContentWrapper = styled.div`
 padding-right: 15px;
  padding-left: 15px;
  h2 {
color: #232323;
font-family: "Barlow Condensed",sans-serif;
font-size: 38px;
font-weight: 700;
letter-spacing: .5px;
line-height: 1.2;
margin-bottom: .5rem;
margin-top: 1.5rem;
text-align: center;
text-transform: uppercase;
  }
`;
const StyledDiv = styled.div`
  margin: 0 auto;
  background: #f5634b;
  width: 45px;
  height: 4px;
`;
const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 3em;
`;
const BodyContainer = styled.div`
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
const BodyWrapper = styled.div`
  min-width: 0;
  background-color: #fff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  img {
      width: 100%;
      display: block;
  }
`;
const BodyContent = styled.div`
    padding: 1.25rem;

    h4{
color: #232323;
cursor: pointer;
font-family: Montserrat,sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: .5px;
line-height: 30px;
margin-bottom: 0;
margin-top: 0;
text-align: left;
word-wrap: break-word;
    }
    
`;
const Footer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`;
const FooterContainer = styled.div`
margin: 0 auto;`;
const FooterWrapper = styled.div``;
