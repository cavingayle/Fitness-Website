import React from "react";
import styled from "styled-components";
import { GiWeightLiftingUp } from "react-icons/gi";

const Services = () => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <Centered>
            <ContentWrapper>
                <Divider></Divider>
              <h2>OUR SERVICES</h2>
              <p>
                We offer more than 35 group exercise, aerobic classes each week.
              </p>
            </ContentWrapper>
          </Centered>
        </Header>
        <Grid>
          <Service>
            <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
          <Service>
          <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
          <Service>
          <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
          <Service>
          <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
          <Service>
          <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
          <Service>
          <div>
              <Icon />
            </div>
            <h4>WEIGHT LIFTING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              molestias.
            </p>
          </Service>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default Services;

const MainContainer = styled.div`
  padding: 100px 0;
`;

const Header = styled.div``;

const Centered = styled.div`
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  text-align: center;
  padding: 2em;

  h2 {
      font-size: 38px;
      line-height: 1.2;
      margin-top: .5em;
  }

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-gap: 2em;
  grid-auto-flow: row dense;

`;

const Service = styled.div`
text-align: center;
padding: 1em;
`;

const Container = styled.div`
  max-width: 1140px;

  padding: 2em;
  width: 80%;
  margin: 0 auto;
`;
const Icon = styled(GiWeightLiftingUp)`
  font-size: 3rem;
  color: #f5634b;
`;

const Divider = styled.div`
margin: 0 auto;
    background: #f5634b;
    width: 45px;
    height: 4px;

`