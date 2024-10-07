import { Outlet, Link } from "react-router-dom";

function LayoutMain() {
  return (
    <div>
      <header>
        <h1>Event Place</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/auth/register">register</Link>
          <Link to="/auth/login">Login</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Cesar Trigo</p>
      </footer>
    </div>
  );
}
export default LayoutMain;
