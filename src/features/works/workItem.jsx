import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";

export default function WorkItem({ work }) {
  const navigate = useNavigate();
  const { title, images, tags, shortDescription, bgColor } = work;

  return (
    <Container bgColor={bgColor} onClick={() => navigate(`works/${work.id}`)}>
      <ImagesContainer>
        <Image src={images.thumbnail} alt={title} />
      </ImagesContainer>
      <Description>
        <Title>{title}</Title>
        <Tags>{tags}</Tags>
        <Intro>{shortDescription}</Intro>
      </Description>
      <Button>view project</Button>
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
  border-radius: 12px;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.3);
  transition: transform 250ms linear;
  cursor: pointer;
  background: ${(props) => props.theme.colors.neutralGray};

  &:hover {
    transform: scale(105%);
  }
`;

const Description = styled.div`
  bottom: 0;
  width: 100%;
  bottom: 0;
  text-align: left;
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.lg};
  text-transform: capitalize;
`;

const Tags = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;
const Intro = styled.p`
  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px;
`;
