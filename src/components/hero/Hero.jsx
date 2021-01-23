import React from "react";
import { Button } from "../../elements";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  StyledBox,
  HeroH1,
} from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <StyledBox>Gym Fitness Club</StyledBox>
          <HeroH1>
            STEP UP YOUR <br></br>
            <span>FITNESS CHALLENGE</span>
            <br />
            WITH US
          </HeroH1>
          <Button>Join Us</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
