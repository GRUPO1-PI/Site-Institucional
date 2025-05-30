
CREATE DATABASE sonicorp;
use sonicorp;

CREATE TABLE empresa (
    idEmpresa INT AUTO_INCREMENT PRIMARY KEY,
    razaoSocial VARCHAR(100) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    telefone VARCHAR(15) not null,
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO empresa Values
(default, 'Alimentoz', '8919289237489', '11949692324', default);

CREATE TABLE endereco (
    idEndereco INT AUTO_INCREMENT PRIMARY KEY,
    idEmpresa INT NOT NULL UNIQUE,
    logradouro VARCHAR(100) not null,
    numero INT not null,
    complemento VARCHAR(40), 
    bairro VARCHAR(100) not null,
    cidade VARCHAR(100) not null,
    UF CHAR(2) not null,
    cep CHAR(8) not null,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE representante (
    idRepresentante INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) not null,
    telefone VARCHAR(15) not null,
    email VARCHAR(45) unique not null,
    senha VARCHAR(45) not null,
    idEmpresa INT,
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
);

insert into representante values
(default, 'Charles Xavier', '30550343054', '11997891312', 'xavier@email.com', 'BATATAS.', 1),
(default, 'Admin', '95853892395', '11984991395', 'admin3@admin.com', 'BATATAS.', 1);

CREATE TABLE setor (
    idSetor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
		constraint chknome check (nome in ('Seleção de matéria prima','Higienização','Processamento','Embalagem','Armazenamento','Distribuição')),
	fkEmpresa int,
		constraint fkEmpresa_setor foreign key (fkEmpresa) references empresa(idEmpresa)
);

insert into setor(nome, fkEmpresa) values
('Seleção de matéria prima', 1),
('Higienização', 1),
('Processamento', 1),
('Embalagem', 1),
('Armazenamento', 1),
('Distribuição', 1);


CREATE TABLE esteira (
    idEsteira INT PRIMARY KEY AUTO_INCREMENT,
    idSetor INT, -- verificar a necessidade de uma coluna metragem./ 4 sensores para cada esteira
    FOREIGN KEY (idSetor) REFERENCES setor(idSetor),
    numero INT,
    metragem INT
);

INSERT INTO esteira (idSetor, numero, metragem) VALUES
(1, 1, 8), (1, 2, 8), -- Seleção de matéria prima
(2, 1, 8), (2, 2, 8), -- Higienização
(3, 1, 8), (3, 2, 8),  -- Processamento
(4, 1, 8), (4, 2, 8),  -- Embalagem
(5, 1, 8), (5, 2, 8),  -- Armazenamento
(6, 1, 8), (6, 2, 8);  -- Distribuição

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY auto_increment,
    numSerie CHAR(3),
    dtInstalacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkEsteira INT,
    CONSTRAINT fkSensor_Esteira
    FOREIGN KEY (fkEsteira)
    REFERENCES esteira(idEsteira),
    fkEmpresa INT, -- Verificar se é necessário pkComposta.
    CONSTRAINT fkSensor_empresa
    FOREIGN KEY (fkEmpresa)
    REFERENCES empresa(idEmpresa)
);

INSERT INTO sensor (numSerie, fkEsteira, fkEmpresa) VALUES
('A12', 1, 1), ('M12', 1, 1),
('B04', 2, 1), ('Z15', 2, 1),
('Y08', 3, 1), ('J19', 3, 1), 
('G20', 4, 1), ('U06', 4, 1), 
('L05', 5, 1), ('E14', 5, 1),
('S10', 6, 1), ('W03', 6, 1), 
('I16', 7, 1), ('Q12', 7, 1),
('C19', 8, 1), ('T04', 8, 1), 
('H07', 9, 1), ('R13', 9, 1), 
('D16', 10, 1), ('G01', 10, 1), 
('X14', 11, 1), ('A20', 11, 1), 
('O04', 12, 1), ('K23', 12, 1);

CREATE TABLE monitoramento (
    idMonitoramento INT AUTO_INCREMENT PRIMARY KEY,
    fkSensor INT,
    produtoDetectado BOOLEAN, -- Perguntar para a Vivian
    dtMonitoramento DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkSensorMonit FOREIGN KEY (fkSensor)
        REFERENCES sensor(idSensor)
);

select * from monitoramento;
SELECT COUNT(*) FROM esteira;
SELECT COUNT(*) FROM sensor;
SELECT fkEsteira, COUNT(*) FROM sensor GROUP BY fkEsteira;

SELECT s.numSerie FROM sensor AS s JOIN esteira AS e ON
    s.fkEsteira = e.idEsteira WHERE s.fkEsteira = 7 AND e.idSetor = 4;
SELECT produtoDetectado, dtMonitoramento FROM monitoramento AS m JOIN sensor AS s ON
    m.fkSensor = s.idSensor WHERE s.numSerie = 'A12' ORDER BY idMonitoramento DESC LIMIT 1;

