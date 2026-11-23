export default function Cabecalho() {
    return (
        <header>
          <link to='/'>Home</link>
          <nav>
            <NavLink to='/cadastrar'>Cadastrar</NavLink>
            <NavLink to='/Usuario'>Usuario</NavLink>
          </nav>
        </header>
    );
}