import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const DoublePanel = () => {
  return (
    <MainContainer>
      <Container>
        <PhotoWrapper>
          <Img
            src="https://demo.themefisher.com/gymfit/images/bg/bg-5.jpg"
            alt=""
          />
        </PhotoWrapper>

        <TextWrapper>
          <ContentBox>
            <h3>
              WE’VE SKILL IN WIDE <span>RANGE OF FITNESS</span> AND OTHER BODY HEALTH
              FACILITY.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Aliquam lorem ante, dapibus in.
            </p>
            <Button>Learn More</Button>
          </ContentBox>
        </TextWrapper>
      </Container>
    </MainContainer>
  );
};

export default DoublePanel;

const MainContainer = styled.div`
  position: relative;
  padding: 100px 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  max-width: 1140px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const PhotoWrapper = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: inline-block;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`;

const TextWrapper = styled.div`
  padding: 2em;
`;

const ContentBox = styled.div`
h3 {
font-family: "Barlow Condensed",sans-serif;
font-size: 38px;
font-weight: 700;
letter-spacing: .5px;
line-height: 45.6px;
text-align: left;
text-transform: uppercase;

}

span {
    color: #f5634b;

}

`;
