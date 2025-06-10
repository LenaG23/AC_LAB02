function Drawer({onClose, onRemove, items = []}) {
    return (

      <div className="overlay"> 
       <div  className="drawer">   
         <h2 className="d-flex justify-between mb-30">
             Bag 
              <img onClick={onClose} className="cu-p " src="/img/btnremovee.svg" alt="Close"/>
             </h2>

           {

           items.length > 0 ? <div className="items">
           {items.map((obj) => (
   <div  key={obj.id} className="cartItem d-flex align-center mb-20 " >
    <div 
      style={{backgroundImage: `url(${obj.imageUrl})` }}
       className="cartItemImg"></div>

      <div className="mr-20 flex ">
        <p className="mb-5">{obj.title}</p>
        <b>{obj.price} lei.</b>
      </div>
      <img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btnremovee.svg" alt="Remove"/>
    </div>
    ))}
    <div className="cartTotalBlock">
                <ul>
                 <li>
                  <span>Total:</span>
                   <div> </div>
                   <b>21 403 lei. </b>
                  </li>
                   <li>
                   <span>Impozite 5%:</span>
                   <div></div>
                  <b>1074 lei. </b>
                 </li>
                </ul>
                 <button className="greenButton"> 
                 Aproba Cumparatura <img src="/img/arrow1.svg" alt="Arrow"/> 
                </button>
             </div>
    
       </div> : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
             <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="emptycart" />
             <h2>Bag is Empty</h2>
             <p className="opacity-6">Adauga macar o pereche de Tufle, pentru a face comanda.</p>
             <button onClick={onClose} className="greenButton">
              <img className="aric" src="/img/arrow2.svg" alt="arrow"/>
              back
              </button>
           </div>
              }
               
           </div>
           </div>
    );  
}

export default Drawer;