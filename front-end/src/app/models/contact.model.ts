export interface Contact {
  id?: number;
  name: string;
  cpf: string;
  email: string;
  cep?: string;
  address?: string; // Coordenadas opcionais
  type: 'Física' | 'Jurídica';
}
