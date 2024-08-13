import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Home;
