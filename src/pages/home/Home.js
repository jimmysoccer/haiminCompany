import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { IntroductionContainer } from "./components/introduction_container";
import { FunctionalityContainer } from "./components/functionality_container";
import { FooterContainer } from "./components/footer_container";
import { ProjectsContainer } from "./components/projects_container";

function Home() {
  return (
    <div>
      <IntroductionContainer />
      <FunctionalityContainer />
      <ProjectsContainer />
      <FooterContainer />
    </div>
  );
}
export default Home;
