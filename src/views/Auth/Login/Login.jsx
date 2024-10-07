/* import authQueries from "../../../services/authQueries" */

function Login() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h4>LOGIN</h4>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
