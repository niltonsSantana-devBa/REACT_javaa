import { Link, NavLink } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.png'

export function Header(){
    return(
        <header>
            <div>
                <Link to="/">
                <img src= {logo} alt="Logo" />
                <span>Comtabilidade Simples</span>
                </Link>

                <nav>
                    <NavLink to="/sobre-nos">Sobre Nós</NavLink>
                    <NavLink to="/fale-conosco">Fale Conosco</NavLink>
                </nav>
            </div>
        </header>
    )
}
