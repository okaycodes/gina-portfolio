import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";
import { projects } from "./projects.constants";

export default function WorkContainer({ id }) {
  const work = projects.filter((project) => project.id == id)[0];

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
        <SubTitle>wireframe:</SubTitle>
        <Image src={work.images.wireframe} alt="project wireframe" />
      </SubSection>

      <SubSection>
        <SubTitle>thoughts:</SubTitle>
        <Text>{work.thoughts}</Text>
      </SubSection>

      <SubSection>
        <SubTitle>user persona:</SubTitle>
        <Image src={work.images.userPersona} alt="user persona" />
      </SubSection>

      <SubSection>
        <SubTitle>high fidelity mock up:</SubTitle>
        <Image src={work.images.highFidelity} alt="high fidelity design" />
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
  max-width: 700px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
`;

const SubSection = styled.article`
  align-self: stretch;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p``;

const SubTitle = styled.h2`
  font-size: 20px;
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
