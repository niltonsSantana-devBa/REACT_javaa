import './styles.css'

export default function CadastroPage() {

    return (
        <div className="cadastro-container">
            <h1>Cadastro de Usuário</h1>
            <form className="cadastro-form">
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}