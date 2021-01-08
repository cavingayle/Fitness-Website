import React from "react";
import styled from "styled-components";
import heroBg from "../images/bg-7.jpg";
import { Button } from "../elements";

const Hero = () => {
  return (
    <HeroContainer>
    <HeroContent>
      <HeroItems>
        <HeroH1>STEP UP YOUR 
            <span>FITNESS CHALLENGE</span>
            <br/>
            WITH US
             </HeroH1>
        <HeroP>Ready in 60 seconds</HeroP>
        <Button>Place Order</Button>
      </HeroItems>
    </HeroContent>
  </HeroContainer>
  );
};

export default Hero;

 const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${heroBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  
`;

 const HeroContent = styled.div`
  max-height: 100%;
  padding: 200px calc((100vw - 1300px) / 2);
`;

 const HeroItems = styled.div`
 margin-left:0;
 width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

 const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: .5px;
  color: white;

  span {
      color: #f5634b;
  }
`;

 const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

 const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;


