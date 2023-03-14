import React from 'react';
import  './AuthorPage.css';
export default function Switch({ isNew, setIsNew }) {
const handleChange = () => {
setIsNew(!isNew);
};

return (
<div className='switch-container'>
<p className='new'>New</p>

<input type="checkbox" checked={isNew} onChange={handleChange} className="switch" id='switch'/>
<label htmlFor="switch" className='slider'></label>
<p className='new'>Old</p>
</div>
);
}