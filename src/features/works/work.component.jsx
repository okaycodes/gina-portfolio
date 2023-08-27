import styled from "styled-components";
import { works } from "./works.constants";

export default function WorkContainer({ id }) {
  const work = works.filter((project) => project.id === id)[0];

  return (
    <Container>
      <Title>{work.title}</Title>
      <LinkContainer>
        View full project on{" "}
        <Link href={work.link} target="_blank">
          Figma
        </Link>
      </LinkContainer>

      <SubSection>
        <SubTitle>Your favorite pizza delivered to you</SubTitle>
        <Image src={work.images.thumbnail} alt="hero" />
      </SubSection>

      <SubSection>
        <Card primaryColor={work.primaryColor}>
          <h3>{work.decription.title}</h3>
          <p>{work.decription.details}</p>
        </Card>
      </SubSection>

      <SubSection>
        <SubTitle primaryColor={work.primaryColor}>Design Process</SubTitle>
        <Image src={work.images.designProcess} alt="desgin process" />
      </SubSection>

      {work.images.userPersona && (
        <SubSection>
          <SubTitle primaryColor={work.primaryColor}>Persona</SubTitle>
          <Image src={work.images.userPersona} alt="user persona" />
        </SubSection>
      )}

      {work.images.userFlow && (
        <SubSection>
          <SubTitle primaryColor={work.primaryColor}>User Flow</SubTitle>
          <Image src={work.images.userFlow} alt="user flow" />
        </SubSection>
      )}

      {work.images.userJourney && (
        <SubSection>
          <SubTitle primaryColor={work.primaryColor}>User Journey</SubTitle>
          <Image src={work.images.userJourney} alt="user flow" />
        </SubSection>
      )}

      <SubSection>
        <SubTitle primaryColor={work.primaryColor}>
          Low Fidelity Mock Ups
        </SubTitle>
        <ImageList>
          {work.images.lowFidelity.map((img) => (
            <ImageContainer>
              <Image src={img} alt="low fidelity mock up" />
            </ImageContainer>
          ))}
        </ImageList>
      </SubSection>

      <SubSection>
        <SubTitle primaryColor={work.primaryColor}>High Fidelity</SubTitle>
        <ImageList>
          {work.images.highFidelity.map((img) => (
            <ImageContainer>
              <Image src={img} alt="high fidelity designs" />
            </ImageContainer>
          ))}
        </ImageList>
      </SubSection>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  width: 85%;
  max-width: 960px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
`;

const SubSection = styled.article`
  align-self: stretch;
  margin-bottom: 3em;
  text-transform: capitalize;
`;

const ImageContainer = styled.div`
  min-width: 200px;
  max-width: 200px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-items: center;
  overflow: scroll;
`;

const Image = styled.img`
  width: 100%;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.primaryColor};
`;

const LinkContainer = styled.div`
  font-size: ${(props) => props.theme.fontSize.xl};
`;

const Link = styled.a`
  all: unset;
  text-decoration: underline;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};

  &:focus {
    padding: 0.2em;
    border-radius: 3px;
    border: solid 1px ${(props) => props.theme.colors.primary};
  }
  &:focus,
  &:hover {
    color: blue;
  }
`;

const Card = styled.section`
  padding: 1em;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.neutralBlack};
  font-size: ${(props) => props.theme.fontSize.s};
  background-color: ${(props) => props.theme.colors.neutralGrayLight};

  & h3 {
    color: ${(props) => props.primaryColor};
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    font-size: ${(props) => props.theme.fontSize.m};
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    display: flex;
    align-items: center;
    gap: 2em;
    font-size: ${(props) => props.theme.fontSize.m};

    & h3 {
      flex-basis: 300px;
    }
  }
`;
