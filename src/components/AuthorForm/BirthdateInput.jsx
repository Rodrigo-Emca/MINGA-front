import React from 'react';

const BirthdateInput = ({ birthdate, setBirthdate }) => {
  return (
    <div className="form-group">
      <label htmlFor="birthdate">Fecha de nacimiento:</label>
      <input type="date" className="form-control" id="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
    </div>
  );
};

export default BirthdateInput;
