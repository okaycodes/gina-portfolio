import styled from "styled-components";
import { SectionBaseStyles } from "../common/styles";

export default function HeroContainer() {
  return (
    <Container id="about">
      <Intro>
        <span>Hi there, My name is </span>
        <Title>Georgina Riebelle</Title>
      </Intro>
      <Intro>
        <Text>
          I am a user experience and user interactive designer with a skill set
          covering different areas and technologies including Figma, AdobeXd,
          Adobe Photoshop, Motion Design etc.{" "}
        </Text>
        <Text>
          I strive to solve design problems by bringing your design ideas to
          life with my unique expertise and experience.
        </Text>
      </Intro>
    </Container>
  );
}

export const Container = styled(SectionBaseStyles)`
  align-items: center;
  padding: 220px 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl3};
  line-height: 1.6;
  display: inline;
  color: ${(props) => props.theme.colors.primary};
`;

export const Text = styled.p``;

export const Intro = styled.div`
  font-size: ${(props) => props.theme.fontSize.xl1};
  width: 85%;
  max-width: 750px;
`;
