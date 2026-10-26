import './style.css'

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p>SENAI dedenzeros</p>
        </footer>
    );
}

export default Footer;