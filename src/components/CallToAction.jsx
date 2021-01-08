import React from "react";
import styled from "styled-components";
import background from "../images/slide2.jpg";
import { Button } from "../elements";

const CallToAction = () => {
  return (
    <CTA>
      <Container>
        <ContentWrapper>
          <h3>BOOK YOUR EARLY SEAT TO GET SUMMER 25% DICSOUNT</h3>
          <Button>Join Today</Button>
        </ContentWrapper>
      </Container>
    </CTA>
  );
};

export default CallToAction;

const CTA = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
    url(${background}) fixed 50% 50% no-repeat;
  background-size: cover;
  background-position: fixed;
  padding: 10px 0;
`;

const Container = styled.div`
`;

const ContentWrapper = styled.div`
  width: 640px;
  padding: 1em;

  text-align: center;
  margin-left:auto;
  margin-right:auto;
  
  h3 {
    color: #fff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 66px;

    text-align: center;
    text-transform: uppercase;
  }
`;
