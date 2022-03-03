import { useState } from "react"

const ItemCount = ({stock, inicial}) => {
    let [estado, setEstado] = useState(inicial)


    const handleSumar = () => {
        if(estado < stock){
            setEstado(estado + 1)
        }
    }

    const handleRestar = () => {
        if(estado > 1){
            setEstado(estado - 1)
        }
    }

    const onADD = () => {
        
        if(estado < stock){
            console.log(estado);
        }
    
    }



    return (        
        <div id="Buttons">
            <div>
             <button onClick={handleRestar}>-</button>
             <span> {estado} </span>
             <button onClick={handleSumar}>+</button>
            </div>           
            <div>
             <button onClick={onADD}>Agregar al carrito</button>
            </div>           
        </div>
    )
}

export default ItemCount