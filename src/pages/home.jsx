import AboutSummaryContainer from "../features/about/summary.component";
import CertContainer from "../features/certifications/certifications.component";
import HeroContainer from "../features/hero/hero.component";
import SkillsContainer from "../features/skills/skill";

import WorksListContainer from "../features/works/worksList.component";

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <CertContainer />
      <AboutSummaryContainer />
      <SkillsContainer />
      <WorksListContainer />
    </>
  );
}
