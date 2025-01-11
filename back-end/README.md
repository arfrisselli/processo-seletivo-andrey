# Desafio Back-end - Agenda de Contatos

## Sobre o Projeto
Este projeto é uma API REST desenvolvida para gerenciar uma agenda de contatos. A API permite a criação, edição, consulta e remoção de contatos, com validações robustas de dados e integração com serviços externos para notificação e autenticação. A solução foi desenvolvida em **Java 17** utilizando o **Spring Boot 3.1.9** e banco de dados **PostgreSQL**.

## Funcionalidades Principais
- Cadastro, consulta, edição e remoção de contatos.
- Validação de dados, incluindo CPF e CEP.
- Persistência dos dados em banco relacional SQL (PostgreSQL).
- Tratamento de exceções para dados inválidos e erros de banco de dados.
- Envio de notificações por e-mail (simulado via integração com um endpoint externo).
- Suporte à expansão para consultas e funcionalidades mais complexas.

## Tecnologias Utilizadas
- **Java 17**: Linguagem de programação principal do projeto.
- **Spring Boot 3.1.9**: Framework para criação de aplicações web e APIs.
- **Spring Data JPA**: Para acesso e manipulação de dados no banco relacional.
- **Spring Validation**: Para validações robustas nos dados de entrada.
- **Spring Boot Starter Mail**: Para envio de notificações (simulação via API externa).
- **PostgreSQL**: Banco de dados relacional para persistência dos contatos.
- **Maven**: Gerenciador de dependências e build do projeto.
- **RestTemplate**: Para consumo de APIs externas.

## Estrutura do Projeto
O projeto está organizado em camadas seguindo boas práticas de design:

- **Controller**: Gerencia as requisições HTTP e retorna as respostas.
- **Service**: Contém a lógica de negócio.
- **Repository**: Responsável por interagir com o banco de dados.
- **Model**: Define as entidades do sistema.
- **DTO**: Define os objetos de transferência de dados entre camadas.
- **Exception**: Tratamento global de erros.

## Configuração e Execução do Projeto

### Requisitos
- **Java 17**
- **Maven**
- **PostgreSQL**

### Passos para Configuração
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Configure o banco de dados PostgreSQL:
    - Crie um banco de dados chamado `agenda`.
    - Atualize as credenciais no arquivo `application.properties`:
      ```properties
      spring.datasource.url=jdbc:postgresql://localhost:5432/agenda
      spring.datasource.username=seu-usuario
      spring.datasource.password=sua-senha
      spring.jpa.hibernate.ddl-auto=update
      spring.jpa.show-sql=true
      ```

3. Instale as dependências do projeto:
   ```bash
   mvn clean install
   ```

4. Execute o projeto:
   ```bash
   mvn spring-boot:run
   ```

A aplicação estará disponível em `http://localhost:8080`.

### Endpoints da API
- **POST /api/contatos**: Cria um novo contato.
- **GET /api/contatos**: Lista todos os contatos.
- **DELETE /api/contatos/{id}**: Remove um contato pelo ID.

## Testes
Para testar a API, você pode usar ferramentas como **Postman**, **Insomnia** ou qualquer cliente HTTP de sua preferência.

### Exemplo de Requisição POST
**URL:** `http://localhost:8080/api/contatos`
**Body (JSON):**
```json
{
  "nome": "João Silva",
  "cpf": "12345678901",
  "cep": "01001000",
  "tipoContato": "Físico"
}
```

**Resposta (201 Created):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "cpf": "12345678901",
  "cep": "01001000",
  "tipoContato": "Físico"
}
```

## Considerações Finais
Este projeto foi criado como parte de um desafio para avaliar habilidades de desenvolvimento back-end.

### Possíveis Melhorias Futuras
- Implementar autenticação de usuários.
- Suporte a contatos do tipo Pessoa Jurídica.
- Consultas mais complexas, como filtrar contatos por prefixo de CPF.
- Internacionalização (i18n) para respostas em múltiplos idiomas.
- Integração com mais serviços externos.

