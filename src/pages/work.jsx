import { useParams } from "react-router-dom";

import WorkContainer from "../features/projects/work.component";

export default function Work() {
  const { id } = useParams();
  return <WorkContainer id={id} />;
}
