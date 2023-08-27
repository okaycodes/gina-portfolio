import styled from "styled-components";
import { SectionBaseStyles } from "../common/styles";
import Research from "../../assets/images/research.png";
import Design from "../../assets/images/design.png";
import Testing from "../../assets/images/testing.png";

export default function SkillCardsContainer() {
  const skills = [
    {
      title: "research",
      imgSrc: Research,
      desc: "Understand the market, define the audience, and ideate potential solutions",
    },
    {
      title: "product design",
      imgSrc: Design,
      desc: "Define the solution, create a roadmap, establish architecture and design the product.",
    },
    {
      title: "testing",
      imgSrc: Testing,
      desc: "Establish usability, meet accessibility needs and ensure a delightful solution.",
    },
  ];

  return (
    <Container id="skills">
      <SkillList>
        {skills.map((skill) => {
          return (
            <SkillCard key={skill.title}>
              <ImageContainer>
                <img src={skill.imgSrc} alt={skill.title} />
              </ImageContainer>
              <h2>{skill.title}</h2>
              <p>{skill.desc}</p>
            </SkillCard>
          );
        })}
      </SkillList>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)``;

const SkillList = styled.ul`
  display: grid;
  max-width: 800px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 100px;
`;

const SkillCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  padding: 2em;
  background: ${(props) => props.theme.colors.neutralGray};
  border-radius: 25px;
  gap: 4px;
  max-width: 360px;
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  background: linear-gradient(180deg, #e157b2 0%, #3d034b 100%);

  & h2 {
    text-transform: capitalize;
  }

  & p {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: lightYellow;
  & img {
    width: 100%;
    scale: 110%;
  }
`;
