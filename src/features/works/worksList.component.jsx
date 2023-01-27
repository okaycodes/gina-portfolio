import styled from "styled-components";

import Title from "../ui/title";
import WorkItem from "./workItem";
import { works } from "./works.constants";
import { SectionBaseStyles } from "../common/styles";

export default function WorksListContainer() {
  return (
    <Container id="works">
      <Title>Works</Title>
      <List>
        {works.map((work) => (
          <WorkItem work={work} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
   width: 90%
   max-width: ${(props) => props.theme.bp.xl};
   margin-top: 50px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  justify-content: center;
  width: 85%;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
  grid-gap: 2em;
`;
