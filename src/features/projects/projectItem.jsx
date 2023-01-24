import styled from "styled-components";

export default function ProjectItem({ project }) {
  const { title, image, description, links, bgColor } = project;
  return (
    <Container bgColor={bgColor}>
      <Image src={image.src} alt={image.alt} />
      <Description>
        <Title>{title}</Title>
        <Intro>
          {description.intro} <span>...more</span>
        </Intro>
      </Description>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  height: 380px;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.65);
  background-color: ${(props) => props.bgColor};
`;

const Description = styled.div`
  padding: 0 1em;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  position: absolute;
  bottom: 0;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.primary};
`;

const Intro = styled.p`
  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
