import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
const LazyContainer = lazy(() =>
  import("../../components/container/Container")
);

const About = () => {
  const { id } = useParams();

  return (
    <div className="dashboard_container">
      <h1>About Fitness: {id}</h1>
      <Suspense fallback={<h2>Loading..</h2>}>
        <LazyContainer />
      </Suspense>
    </div>
  );
};

export default About;
