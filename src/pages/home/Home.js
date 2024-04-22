import "bootstrap/dist/css/bootstrap.min.css";
import { IntroductionContainer } from "./components/introduction_container";
import { FunctionalityContainer } from "./components/functionality_container";
import { ProjectsContainer } from "./components/projects_container";

function Home() {
  return (
    <div>
      <IntroductionContainer />
      <FunctionalityContainer />
      <ProjectsContainer />
    </div>
  );
}
export default Home;
