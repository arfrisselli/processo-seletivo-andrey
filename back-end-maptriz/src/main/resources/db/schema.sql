CREATE TABLE contato (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf_cnpj VARCHAR(20) NOT NULL,
    email VARCHAR(100),
    cep VARCHAR(10),
    tipo VARCHAR(20),
    usuario_id BIGINT
);
