export default function App() {
  return (
    <div>
      <h2>Water My Plants</h2>
      <Login />
    </div>
  );
}

function Login() {
  return (
    <form>
      <h2>Login</h2>
      <label>
        Username:
        <input name="username" />
      </label>
      <label>
        Password:
        <input name="password" />
      </label>
      <button>Submit</button>
      <button>Forget Username?</button>
    </form>
  );
}
