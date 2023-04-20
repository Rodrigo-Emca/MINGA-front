import React from 'react';

const ProfileImageInput = ({ urlProfileImage, setUrlProfileImage }) => {
  return (
    <div className="form-group">
      <label htmlFor="profileImage">URL de la imagen de perfil:</label>
      <input type="text" className="form-control" id="profileImage" value={urlProfileImage} onChange={e => setUrlProfileImage(e.target.value)} />
    </div>
  );
};

export default ProfileImageInput;
