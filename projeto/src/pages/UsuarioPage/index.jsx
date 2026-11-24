import { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

export default function UsuarioPage() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await api.get('/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsuarios();
  }, []); // O array vazio garante que a busca aconteça apenas uma vez ao abrir a página

  return (
    <div>
      <h1>Usuário</h1>
      <p>Esta é a página de usuário.</p>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} {/* ⚠️ Ajuste as propriedades (id, nome) conforme o retorno da sua API */}
          </li>
        ))}
      </ul>
    </div>
  );
}