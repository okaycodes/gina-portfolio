import styled from "styled-components";

export default function ContactsContainer() {
  return (
    <Container id="contact">
      <Content>
        <p>you can contact me via the following channels</p>
        <p>email: georginariebelle@gmail.com</p>
        <p>linkedIn: www.linkedin.com/georginariebelle</p>

        <FlexContainer>
          <ContactLink
            variant="ICON"
            iconType="image"
            animateIconSize
            href="mailto: georginariebelle@gmail.com"
          >
            <img src="../../images/icons/email.svg" />
          </ContactLink>
          <ContactLink
            variant="ICON"
            iconType="image"
            animateIconSize
            href="https://www.linkedin.com/georginariebelle"
          >
            <img src="../../images/icons/linkedIn.svg" />
          </ContactLink>
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

const ContactLink = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0em;
  background: none;
  border: none;
  width: 68px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

  transition: transform 200ms;

  & img {
    display: block;
    padding: 0;
    margin: 0;
  }

  &:hover {
    transform: scale(110%);
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    ${(props) =>
      props.iconType === "image" &&
      `width: 88px;
       height: 80px;
       border-radius: 3px;`}
  }
`;
