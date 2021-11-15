export default function App() {
  return (
    <div>
      <h2>Water My Plants</h2>
      <RegistrationForm />
    </div>
  );
}

function RegistrationForm() {
  return (
    <form>
      <h2>Registration</h2>
      <label>
        Username:
        <input></input>
      </label>
      <label>
        Phone Number:
        <input></input>
      </label>
      <label>
        Password:
        <input></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
