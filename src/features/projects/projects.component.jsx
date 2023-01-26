import { useState } from "react";
import styled from "styled-components";

import Title from "../ui/title";
import ProjectItem from "./projectItem";
import { projects } from "./projects.constants";
import { SectionBaseStyles } from "../common/styles";

export default function ProjectContainer() {
  const [selectedProjects, setSelectedProjects] = useState(projects);

  const handleFilter = (filter) => {
    const selected =
      filter === "all"
        ? projects
        : projects.filter((project) => project.type.includes(filter));
    setSelectedProjects(selected);
  };

  return (
    <Container id="projects">
      <Title handleFilter={handleFilter}>Works</Title>
      <List>
        {selectedProjects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled(SectionBaseStyles)`
   width: 90%
   max-width: ${(props) => props.theme.bp.xl};
   margin-top: 100px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  justify-content: center;
  width: 85%;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
  grid-gap: 2em;
`;
