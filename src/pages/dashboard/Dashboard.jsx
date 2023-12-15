import { Suspense, lazy } from "react";
import Container from "../../components/container/Container";
import "./dashboard.css";
const LazyContainer = lazy(() =>
  import("../../components/container/Container")
);

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <h1 className="font-bold">All Products: </h1>
      <br />
      <Suspense fallback={<h2>Loading..</h2>}>
        <LazyContainer />
      </Suspense>
    </div>
  );
};

export default Dashboard;
