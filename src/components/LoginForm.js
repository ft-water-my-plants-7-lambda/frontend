export default function LoginForm() {
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
      <button type="submit">Submit</button>
      <button>Forget Username?</button>
    </form>
  );
}
