import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
          <nav id="nav">
            <h1>E-COMMERCE</h1>
            <CartWidget/>
            <ul>
              <li><a href="#">Categorias</a></li>
              <li><a href="#">Mis compras</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </>
    )
}

export default NavBar