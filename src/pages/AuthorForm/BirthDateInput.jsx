import React from "react";

const BirthDateInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor="birthdate"></label>
      <input
  type="date"
  name="birthdate"
  id="birthdate"
  required
  ref={ref}
  {...props}
/>

    </div>
  );
});

export default BirthDateInput;
