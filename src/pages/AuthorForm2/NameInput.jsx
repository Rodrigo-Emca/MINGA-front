import React from "react";

function AuthorNameInput({ nameRef, lastNameRef, className, Id }) {
  return (
    <div>
      <label htmlFor={Id}></label>
      <input type="text" ref={nameRef} placeholder="Name" name="name" className={className} />
      <label htmlFor={Id}></label>
      <input type="text" ref={lastNameRef} placeholder="Last name" name="lastName" className={className} />
    </div>
  );
}

export default AuthorNameInput;
