import React from "react"
import './App.css'
export default function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formData.password !== formData.passwordConfirm) {
      console.log("Passwords do not match");
      return; // Exit early if passwords don't match
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up!"); // Only log this if the newsletter checkbox is checked
    } else {
      console.log("Successfully signed up"); // Only log this if the newsletter checkbox is not checked
    }


  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />
        <div className="form--marketing">
          <input
            type="checkbox"
            id="okayToEmail"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign Up</button>
      </form>
    </div>
  );
}
