import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function WorkItem({ work }) {
  const navigate = useNavigate();
  const { title, images, description, bgColor } = work;
  return (
    <Container bgColor={bgColor} onClick={() => navigate(`works/${work.id}`)}>
      <ImagesContainer>
        <Image src={images.display[0]} alt={title} />
        <Image src={images.display[1]} alt={title} />
      </ImagesContainer>
      <Description>
        <Title>{title}</Title>
        <Intro>{description}</Intro>
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
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.bgColor};
  transition: transform 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(105%);
  }
`;

const Description = styled.div`
  padding: 0 1.5em;
  bottom: 0;
  width: 100%;
  font-size: 14px;
  bottom: 0;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.m};
  color: ${(props) => props.theme.colors.primary};
  text-transform: capitalize;
`;

const Intro = styled.p`
  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ImagesContainer = styled.div`
  padding-top: 1.5em;
  display: flex;
  justify-content: center;
  width: 80%;
  //   height: 67%;
`;

const Image = styled.img`
  display: block;
  width: 45%;
`;
