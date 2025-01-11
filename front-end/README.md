# Front-end - Agenda de Contatos

## Sobre o Projeto
Este projeto é o front-end de uma aplicação para gerenciar uma agenda de contatos. Ele foi desenvolvido utilizando o framework **Angular** e segue boas práticas de arquitetura e organização de código. A interface permite:

- Listar contatos cadastrados.
- Adicionar novos contatos.
- Editar contatos existentes.
- Excluir contatos.

O projeto também utiliza **NGXS** para gerenciamento de estado, permitindo uma estrutura limpa e escalável.

## Tecnologias Utilizadas
- **Angular 15+**: Framework para desenvolvimento de aplicações front-end baseadas em TypeScript.
- **NGXS**: Biblioteca para gerenciamento de estado, inspirada pelo Redux, mas simplificada para Angular.
- **TypeScript**: Linguagem principal do projeto, adicionando tipagem estática ao JavaScript.
- **RxJS**: Biblioteca para manipulação de streams reativas.
- **HTML5 e SCSS**: Para criar e estilizar a interface do usuário.
- **Angular Material (opcional)**: Para melhorar a experiência visual com componentes prontos.

## Estrutura do Projeto
O projeto está organizado da seguinte maneira:

```
src/app/
├── components/        # Componentes da interface
│   ├── contact-form/  # Formulário para criar ou editar contatos
│   ├── contact-list/  # Lista de contatos
├── models/            # Modelos de dados utilizados
│   ├── contact.model.ts
├── services/          # Serviços para comunicação com a API
│   ├── contact.service.ts
├── state/             # Gerenciamento de estado com NGXS
│   ├── contact.state.ts
│   ├── contact.actions.ts
├── app-routing.module.ts
├── app.module.ts
```

## Funcionalidades

### Funcionalidades Principais
- **Listagem de Contatos**: Exibe todos os contatos cadastrados.
- **Cadastro de Contatos**: Permite criar um novo contato, com validação de dados no formulário.
- **Edição de Contatos**: Edita os detalhes de um contato existente.
- **Exclusão de Contatos**: Remove um contato do sistema.

### Funcionalidades Extras
- **Validações no Formulário**: Campos obrigatórios e validação de formatos (e.g., CPF, e-mail).
- **Feedback ao Usuário**: Mensagens de confirmação e alerta ao executar operações.
- **Gerenciamento de Estado com NGXS**: Garante performance e consistência nas operações.

## Configuração e Execução do Projeto

### Requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 14 ou superior)
- **Angular CLI**

### Instalação
1. Clone o repositório do projeto:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd agenda-contatos
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

### Execução
Para iniciar o servidor de desenvolvimento, execute:
```bash
ng serve
```
A aplicação estará disponível em [http://localhost:4200](http://localhost:4200).

### Build
Para gerar uma versão de produção, utilize:
```bash
ng build --prod
```
Os arquivos gerados estarão na pasta `dist/`.

## Endpoints Consumidos
A aplicação consome os seguintes endpoints:
- **Listar Contatos**: `GET /api/contatos`
- **Adicionar Contato**: `POST /api/contatos`
- **Atualizar Contato**: `PUT /api/contatos/{id}`
- **Deletar Contato**: `DELETE /api/contatos/{id}`

## Melhorias Futuras
- Implementar paginação e filtros na listagem de contatos.
- Melhorar o design com bibliotecas como Angular Material ou Bootstrap.
- Adicionar suporte à internacionalização (i18n).
- Implementar autenticação e autorização para acesso às rotas.

## Considerações Finais
Este projeto foi desenvolvido como parte de um desafio técnico.