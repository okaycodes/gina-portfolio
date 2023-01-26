import styled from "styled-components";

export default function HeroContainer() {
  return (
    <Container id="about">
      <Intro>
        <Text> Hi there, my name is </Text>
        <Title>Georgina Riebelle</Title>
      </Intro>

      <Text>
        I am a user experience and user interactive designer with a skill set
        covering different areas and technologies including Figma, AdobeXd,
        Adobe Photoshop, Motion Design etc.{" "}
      </Text>
      <Text>
        I strive to solve design problems by bringing your design ideas to life
        with my unique expertise and experience.
      </Text>
    </Container>
  );
}

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  padding-top: 160px;
  width: 85%;
  max-width: 750px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSize.xl2};
  display: inline;

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    font-size: ${(props) => props.theme.fontSize.xl3};
    line-height: 1.6;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.xl};
  @media (min-width: ${(props) => props.theme.bp.sm}) {
    font-size: ${(props) => props.theme.fontSize.xl1};
  }
`;

const Intro = styled.section`
  align-self: stretch;
  text-align: left;

  & ${Text} {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    & ${Text} {
      display: inline;
      font-size: ${(props) => props.theme.fontSize.xl1};
    }
  }
`;
