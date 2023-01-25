import styled from "styled-components";
import Button from "../ui/button";

export default function ContactsContainer() {
  return (
    <Container id="contact">
      <Content>
        <p>you can contact me via the following channels</p>
        <p>email: georginariebelle@gmail.com</p>
        <p>linkedIn: wwww.linkedin.com/georginariebelle</p>

        <FlexContainer>
          <Button variant="ICON" iconType="image" animateIconSize>
            <img src="../../images/icons/email.svg" />
          </Button>
          <Button variant="ICON" iconType="image" animateIconSize>
            <img src="../../images/icons/linkedIn.svg" />
          </Button>
        </FlexContainer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 150px;
  background-image: url("../../images/polygons/light-pink.svg"),
    url("../../images/polygons/light-purple.svg");
  background-position: 10% 100px, 95% 35%;
  background-repeat: no-repeat, no-repeat;
  background-size: 180px;
  width: 85%;
  max-width: ${(props) => props.theme.bp.xl};
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.fontSize.xl};

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    background-size: 220px;
    font-size: ${(props) => props.theme.fontSize.xl1};
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    background-position: 10% 100px, 95% 45%;
    background-size: 250px;
  }
`;

const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 0.5em;
`;
