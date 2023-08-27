import styled from "styled-components";
import Workspace from "../../assets/images/workspace.png";

export default function AboutSummaryContainer({ showImage = true }) {
  return (
    <Container>
      <TextWrapper>
        <Title>
          Hi, I'm Gina <br />
          and I am a product <br />
          designer.
        </Title>
        <Text>
          I am a user experience and user interactive designer. with skills in
          adobe xd, figma, adobe illustrator and photoshop. I strive to solve
          design problems and put users first in my designs while at the same
          time bringing your design ideas to life.
        </Text>
      </TextWrapper>
      {showImage && (
        <ImageContainer>
          <img src={Workspace} alt="" />
        </ImageContainer>
      )}
    </Container>
  );
}

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;
  font-size: ${(props) => props.theme.fontSize.xl};

  @media (min-width: ${(props) => props.theme.bp.md}) {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    width: 90%;
  }
`;

const ImageContainer = styled.div`
  display: none;
  width: 50%;
  max-width: 500px;

  & img {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    display: block;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.bp.md}) {
    width: 60%;
    max-width: 600px;
  }

  @media (min-width: ${(props) => props.theme.bp.lg}) {
    width: 60%;
    max-width: 600px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.xl3};

  @media (min-width: ${(props) => props.theme.bp.md}) {
    font-size: ${(props) => props.theme.fontSize.xl3};
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  @media (min-width: ${(props) => props.theme.bp.md}) {
    font-size: ${(props) => props.theme.fontSize.xl2};
  }
`;
