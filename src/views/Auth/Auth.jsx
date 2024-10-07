import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default Auth;
