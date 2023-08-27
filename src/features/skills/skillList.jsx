import styled from "styled-components";
import { SectionBaseStyles } from "../common/styles";
import UxDesignIcon from "../../assets/icons/uxDesign";
import StrategyIcon from "../../assets/icons/strategy";
import UXResearchIcon from "../../assets/icons/uxResearch";
import GraphicDesignIcon from "../../assets/icons/graphicDesign";
import BrandingIcon from "../../assets/icons/branding";

export default function SkillsListContainer() {
  const skills = [
    { name: "ux design", Icon: <UxDesignIcon /> },
    { name: "digital strategy", Icon: <StrategyIcon /> },
    { name: "research", Icon: <UXResearchIcon /> },
    { name: "graphic design", Icon: <GraphicDesignIcon /> },
    { name: "product strategy", Icon: <StrategyIcon /> },
    { name: "branding", Icon: <BrandingIcon /> },
  ];

  return (
    <Container id="skills">
      <SkillList>
        {skills.map((skill) => {
          return (
            <Skill key={skill.name}>
              {skill.Icon}
              <p>{skill.name}</p>
            </Skill>
          );
        })}
      </SkillList>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)``;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 800px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 100px;
`;

const Skill = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em;
  padding: 0.05em 0.4em;
  background: ${(props) => props.theme.colors.neutralGray};
  border-radius: 25px;
  gap: 4px;
  font-size: ${(props) => props.theme.fontSize.lg};
`;
