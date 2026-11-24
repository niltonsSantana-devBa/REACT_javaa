import './styles.css'

export default function Rodape() {
    const anoAtual = new Date().getFullYear();
    return (
        <div>
        <footer>
            <p>&copy; {anoAtual} Meu Site. Todos os direitos reservados.</p>
            <p>SENAI - Bahia</p>
        </footer>
        </div>
    );
}