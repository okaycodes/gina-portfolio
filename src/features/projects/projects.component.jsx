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
   width: 85%
   max-width: 1100px;
   margin-bottom: 150px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  justify-content: center;
  width: 90%;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
  grid-gap: 2em;
`;
