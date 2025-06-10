import Card from "../components/Card";
import React from 'react';

function Favorites({items, onAddToFavorite}) {

    
    return(
     
        <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
      <h1>My Favorites</h1>
      </div>
        

      <div className="d-flex flex-wrap "> 
      {items.map((item, index) => (
        <Card
         key={index}
          favorited={true}
          onFavorite={onAddToFavorite}
        {...item}
         />
           
          
      ))} 
      </div>
     </div>

    );
}

export default Favorites;
