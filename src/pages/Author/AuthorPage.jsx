import React, { useState } from "react";




function AuthorPage({ match }) {
    const [isNew, setIsNew] = useState(true);
    const authorId = match.params.id;
    
    // lógica para obtener los cómics del autor y filtrarlos según la propiedad "new"
    
    const handleSwitchChange = () => {
      setIsNew(!isNew);
    }
    
    return (
      <>
        {/* renderizar el switch */}
        <label>
          <input type="checkbox" checked={isNew} onChange={handleSwitchChange} />
          {isNew ? "Nuevos" : "Viejos"}
        </label>
        {/* renderizar los subcomponentes de la página de autor */}
      </>
    );
  }
  