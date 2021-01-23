import React from "react";
import { Button } from "../../elements";
import {
  MainContainer,
  Container,
  Header,
  HeaderContainer,
  HeaderContentWrapper,
  StyledDiv,
  Body,
  BodyContainer,
  BodyContent,
  BodyWrapper,
  Footer,
  FooterContainer,
  FooterWrapper
} from './style'
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

