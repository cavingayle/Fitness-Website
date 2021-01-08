import React from "react";
import styled from "styled-components";

const Infosection = () => {
  return (
    <Container>
      <CardWrapper>
        <ContentWrapper>
          <Card>
            <h3>Card Title</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
        <ContentWrapper>
          <Card>
            <h3>Card Title</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
        <ContentWrapper>
          <Card>
            <h3>Card Title</h3>
            <p>
              Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam
              vitae varius.
            </p>
          </Card>
        </ContentWrapper>
      </CardWrapper>
    </Container>
  );
};

export default Infosection;

const Container = styled.div`
margin: 5em 0;
  padding: 4rem 0;
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* max-height: 80vh; */
  justify-content: space-between;
`;

const Card = styled.div`
/* width: 300px; */
  padding: 3rem;
  /* box-shadow: 2px 2px 20px rgba(90, 118, 253, 0.15); */
  border-radius: 10px;
  min-width: 200px;
  margin-bottom: 1em;

  
 
`;
const CardWrapper = styled.div`
  padding: 0 1rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  max-width: 1140px;
`;

const ContentWrapper = styled.div`
    padding: 0 10px;
    flex: 1 1 30%;


`
