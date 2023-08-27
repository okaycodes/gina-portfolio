import styled from "styled-components";

import WorkItem from "./workItem";
import { works } from "./works.constants";
import { SectionBaseStyles } from "../common/styles";

export default function WorksListContainer() {
  return (
    <Container id="works">
      <Title>featured products</Title>
      <p>
        These are the tip of the iceberg, but I'm proud of all of these
        projects.
      </p>
      <List>
        {works.map((work) => (
          <WorkItem work={work} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
  width: 90%;
  max-width: ${(props) => props.theme.bp.xl};
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl2};
  text-align: center;
  text-transform: capitalize;
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
