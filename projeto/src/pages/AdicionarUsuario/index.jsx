import './style.css'
import { useState } from 'react';

function AdicionarUsuario() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const funcaoAdicionarUsuario = (e) => {
        e.preventDefault();
        const novoUsuario = { email, nome };
        setUsuarios([...usuarios, novoUsuario]);
        setEmail('');
        setNome('');
    };

    return (
        <div className="adicionar-usuario">
            <h2>Adicionar Usuário</h2>
            <form onSubmit={funcaoAdicionarUsuario}>
                <label htmlFor="nome">Nome:</label>
                <input type="text"
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required />
        
        <label htmlFor="email">Email:</label>
                    <input type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
        
                <label htmlFor="senha">Senha:</label>
                    <input type="password"
                    id="senha"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required />
        
                <button type="submit">Adicionar</button>
            </form>
            <hr />
            <h2>Lista de Usuários</h2>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>{usuario.nome}
                    {usuario.name} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdicionarUsuario;

