import { Suspense, lazy } from "react";
import Container from "../../components/container/Container";
import "./dashboard.css";
const LazyContainer = lazy(() =>
  import("../../components/container/Container")
);

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <h1>Fitness Dashboard</h1>
      <Suspense fallback={<h2>Loading..</h2>}>
        <LazyContainer />
      </Suspense>
      {/* <Container /> */}
      <section className="importance">
        <h2>Importance of fitness</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores placeat voluptatem quam id dolorem nesciunt possimus magni
          doloribus commodi cum inventore assumenda debitis vel, praesentium
          fuga, ipsum esse minus repellendus dignissimos eum reprehenderit
          architecto deserunt. Voluptas quos ea fugit quam vel sed quisquam nemo
          dolores et rerum excepturi perspiciatis voluptate error fugiat, alias
          id eligendi doloremque perferendis animi corrupti placeat obcaecati
          veritatis eius eveniet? Consequuntur sunt distinctio sapiente ullam
          eaque sequi laborum quos iste ipsa molestias eos exercitationem
          quidem, libero voluptatem debitis ea officiis inventore. Maxime non
          repellendus placeat! Ducimus aspernatur unde sunt numquam delectus
          porro. Necessitatibus, ex totam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores placeat voluptatem quam id dolorem nesciunt possimus magni
          doloribus commodi cum inventore assumenda debitis vel, praesentium
          fuga, ipsum esse minus repellendus dignissimos eum reprehenderit
          architecto deserunt. Voluptas quos ea fugit quam vel sed quisquam nemo
          dolores et rerum excepturi perspiciatis voluptate error fugiat, alias
          id eligendi doloremque perferendis animi corrupti placeat obcaecati
          veritatis eius eveniet? Consequuntur sunt distinctio sapiente ullam
          eaque sequi laborum quos iste ipsa molestias eos exercitationem
          quidem, libero voluptatem debitis ea officiis inventore. Maxime non
          repellendus placeat! Ducimus aspernatur unde sunt numquam delectus
          porro. Necessitatibus, ex totam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          asperiores placeat voluptatem quam id dolorem nesciunt possimus magni
          doloribus commodi cum inventore assumenda debitis vel, praesentium
          fuga, ipsum esse minus repellendus dignissimos eum reprehenderit
          architecto deserunt. Voluptas quos ea fugit quam vel sed quisquam nemo
          dolores et rerum excepturi perspiciatis voluptate error fugiat, alias
          id eligendi doloremque perferendis animi corrupti placeat obcaecati
          veritatis eius eveniet? Consequuntur sunt distinctio sapiente ullam
          eaque sequi laborum quos iste ipsa molestias eos exercitationem
          quidem, libero voluptatem debitis ea officiis inventore. Maxime non
          repellendus placeat! Ducimus aspernatur unde sunt numquam delectus
          porro. Necessitatibus, ex totam!
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
