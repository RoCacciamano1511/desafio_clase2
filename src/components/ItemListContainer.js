import ItemCount from "./ItemCount.js"

const ItemListContainer = ({greeting}) => {
    return (
        <main>
            <h3>Bienvenido {greeting}</h3>
            <ItemCount stock={10} inicial={1}/>
        </main>
    )
}

export default ItemListContainer