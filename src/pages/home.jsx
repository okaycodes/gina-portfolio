import CertContainer from "../features/certifications/certifications.component";
import HeroContainer from "../features/hero/hero.component";
import WorksListContainer from "../features/works/worksList.component";

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <CertContainer />
      <WorksListContainer />
    </>
  );
}
