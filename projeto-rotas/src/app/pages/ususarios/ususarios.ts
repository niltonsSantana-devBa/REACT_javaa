import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-ususarios',
  imports: [FormsModule],
  templateUrl: './ususarios.html',
  styleUrl: './ususarios.css',
})
export class Ususarios {
  usuarios: Usuario[] = [];
  nome: string = '';
  email: string = '';

  adicionarUsuario(): void {
    this.usuarios = [...this.usuarios, { nome: this.nome, email: this.email }];
    this.nome = '';
    this.email = '';
  }
}
