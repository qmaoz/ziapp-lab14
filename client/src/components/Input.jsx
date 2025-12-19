import React, { useState } from "react";

export default function Input(props) {
  const [value, setValue] = useState("");

  const onSubmitForm = async e => {
    e.preventDefaults();
    try {
      const body = { value };
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  }

  const inputCode =
    props.type == "password" ? (
      <div className="input-group" id="show_hide_password">
        <input className="form-control" type={props.type} />
        <div className="input-group-addon">
          <a href="" className="">
            <i className="fa fa-eye-slash" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    ) : (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="on"
      />
    );


  return (
    <>
      {inputCode}
    </>
  );
}
