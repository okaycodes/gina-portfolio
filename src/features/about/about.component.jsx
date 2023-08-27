import styled from "styled-components";
import HeroContainer from "../hero/hero.component";

export default function AboutContainer() {
  const goals = [
    "To help solve users problems as creatively as possible.",
    "To improve my skills and grow professionally and one day soon proudly call myself a senior user experience designer.",
    "To share my designs with the world and strive to be the best person I can be.",
  ];
  return (
    <Container>
      <Content>
        <HeroContainer />
        <Goals>
          {goals.map((goal) => (
            <GoalItem>{goal}</GoalItem>
          ))}
        </Goals>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 100px;
  background-image: url("../../images/polygons/pink.svg"),
    url("../../images/polygons/purple.svg");
  background-position: 10% 100px, 95% 35%;
  background-repeat: no-repeat, no-repeat;
  background-size: 180px;
  max-width: ${(props) => props.theme.bp.xl};
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    background-size: 220px;
  }

  @media (min-width: ${(props) => props.theme.bp.md}) {
    background-position: 10% 100px, 95% 45%;
    background-size: 250px;
  }
`;

const Content = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const Goals = styled.ul`
  margin-left: 30px;
  width: 85%;
  max-width: ${(props) => props.theme.bp.xs};
  font-size: ${(props) => props.theme.fontSize.xl};

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    margin-left: 70px;
    font-size: ${(props) => props.theme.fontSize.xl1};
    max-width: ${(props) => props.theme.bp.sm};
  }
`;

const GoalItem = styled.li`
  margin-bottom: 1em;
`;
