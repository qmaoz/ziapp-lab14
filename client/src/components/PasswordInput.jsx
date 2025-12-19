import { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");
  const [type, setType] = useState("password");

  function onEyeClick(e) {
    const el = e.target;
    e.preventDefault();
    console.log(el);

    let password = el.closest('.toggle-container').querySelector('.pswd');
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    setType(type);
    e.target.classList.toggle('fa-eye-slash');
    e.target.classList.toggle('fa-eye');
  }

  return (
    <>
      <div className="toggle-container">
        <input
          type={type}
          id={props.id}
          maxLength={props.maxLength}
          max={props.maxLength}
          className="form-control pswd"
          value={value}
          placeholder={props.placeholder}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="on"
        />
        <i className="fa fa-eye-slash togglePassword" onClick={(e) => {onEyeClick(e)}}></i>
      </div>
    </>
  );
}
