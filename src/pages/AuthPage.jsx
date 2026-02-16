import { useState } from "react";

function AuthPage({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form.email) newErrors.email = "Required";
    if (!form.password) newErrors.password = "Required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    if (
      form.email === "wizard@hogwarts.com" &&
      form.password === "alohomora"
    ) {
      onLogin();
    } else {
      setErrors({ auth: "Invalid wizard credentials" });
    }
  };

  return (
    <div className="auth-card">
      <h2>🧙 Wizard Login</h2>

      <div className="demo-box">
        <p><strong>Demo Credentials</strong></p>
        <p>User ID: <span>wizard@hogwarts.com</span></p>
        <p>Passcode: <span>alohomora</span></p>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Owl Mail"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Secret Spell"
          onChange={handleChange}
        />
        <button>Enter Hogwarts</button>
      </form>

      {errors.auth && <p>{errors.auth}</p>}

      <div className="link">New Wizard? Get Sorted</div>
    </div>
  );
}

export default AuthPage;
