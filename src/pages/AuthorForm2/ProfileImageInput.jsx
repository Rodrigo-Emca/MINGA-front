import React, { forwardRef } from "react";

const ProfileImageInput = forwardRef((props, ref) => {
  const { className, ...inputProps } = props;

  return (
    <div>
      <label htmlFor="imageUrl"></label>
      <input
        type="url"
        name="imageUrl"
        id="imageUrl"
        placeholder="Image URL"
        required
        ref={ref}
        className={`input ${className}`}
        {...inputProps}
      />
    </div>
  );
});

export default ProfileImageInput;



