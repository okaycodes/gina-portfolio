import HeroContainer from "../features/hero/hero.component";
import ProjectContainer from "../features/projects/projects.component";
import ContactsContainer from "../features/contact/contact";

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <ProjectContainer />
      <ContactsContainer />
    </>
  );
}
