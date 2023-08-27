import styled from "styled-components";

export default function AboutSummaryContainer() {
  return (
    <Container>
      <Title>Hi, I'm Gina and I am a product designer.</Title>
      <Text>
        I am a user experience and user interactive designer. with skills in
        adobe xd, figma, adobe illustrator and photoshop. I strive to solve
        design problems and put users first in my designs while at the same time
        bringing your design ideas to life.
      </Text>
    </Container>
  );
}

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.bp.xl};
  font-size: ${(props) => props.theme.fontSize.xl};
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.xl3};
`;

export const Text = styled.p``;
