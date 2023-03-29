import React from 'react'
import Swal from 'sweetalert2';
import './editprofile.css'
import { useRef, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import authorAction from '../../store/Author/actions'
import { useNavigate } from 'react-router-dom'
const { read_author, update_author } = authorAction

export default function EditProfile() {

  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const editForm = useRef(); 
  const [reload, setReload] = useState(false); 
  const [showAlert, setShowAlert] = useState(false);


  const handleAccept = async (event) => { 
        event.preventDefault();
        const cityCountry = editForm.current[2].value;
        const array = cityCountry.split(",");

        const data = {
          name: editForm.current[0].value,
          last_name: editForm.current[1].value,
          city: array[0],
          country: array[1].trim(),
          date: editForm.current[3].value,
          photo: editForm.current[4].value,
        };

        setShowAlert(false);

        if (!showAlert) {
          const result = await Swal.fire({
            text: "You are about to update your data?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update",
            cancelButtonText: "Cancel",
          });
          console.log(result);
          if (result.isConfirmed) {
            dispatch(update_author({ data: data })); 
            setReload(!reload);
            setShowAlert(true);
          }
        } 
  };

  async function handleDelete (event) { 
      event.preventDefault();
      const data = { 
        active: false,
      };
      const result = await Swal.fire({
        text: "Are you sure to continue?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "yes, delete",
        cancelButtonText: "Cancel",
      });
 
      if (result.isConfirmed) {
          dispatch(update_author({ data: data }));
          setReload(!reload);
  
          setTimeout(() => {
              navigate('/');
          }, 500);
        }
        
    
  };


  let authores = useSelector((store) => store.author.author); 
  const authoresDate = authores?.date?.split("T")[0];
 
    useEffect(() => { 
      if (authores) {
        dispatch(read_author()) 
      }
    }, [reload]) 

  const [inputValue, setInputValue] = useState("");

  useEffect(() => { 
    if (authores?.city && authores?.country) {
      setInputValue(`${authores?.city}, ${authores?.country}`);
    }
  }, [authores]);

  


  return (
    
      <div  className='editProfile'>
        <form  ref={editForm}>
          <input name="name" className='inputAuthorForm' type="text" defaultValue={authores?.name} required />
          <input name="last_name"  className='inputAuthorForm' type="text" defaultValue={authores?.last_name} required />
          <input name="city_country" className='inputAuthorForm' type="text" defaultValue={inputValue} required />
          <input className='inputAuthorForm' type="Date" name='date' defaultValue={authoresDate} required />
          <input name="photo" className='inputAuthorForm' type="text" defaultValue={authores?.photo} required />
          <button className='btnsave' type="submit" value="Save" onClick={handleAccept}> Save </button>
          <button  className='btndelete' type="submit" value="Delete Acount" onClick={handleDelete}> Delete Account </button>
        </form>
      </div>
    
  )
}



