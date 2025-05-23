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
(default, 'Charles Xavier', '30550343054', '11997891312', 'xavier@email.com', 'BATATAS.', 1);

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
    metragem INT
);

INSERT INTO esteira (idSetor, metragem) VALUES
(1, 8), (1, 8), (1, 8), (1, 8), (1, 8), (1, 8), (1, 8), (1, 8), -- Seleção de matéria prima
(2, 8), (2, 8), (2, 8), (2, 8), (2, 8), (2, 8), (2, 8), (2, 8), -- Higienização
(3, 8), (3, 8), (3, 8), (3, 8), (3, 8), (3, 8), (3, 8), (3, 8), -- Processamento
(4, 8), (4, 8), (4, 8), (4, 8), (4, 8), (4, 8), (4, 8), (4, 8), -- Embalagem
(5, 8), (5, 8), (5, 8), (5, 8), (5, 8), (5, 8), (5, 8), (5, 8), -- Armazenamento
(6, 8), (6, 8), (6, 8), (6, 8), (6, 8), (6, 8), (6, 8), (6, 8); -- Distribuição

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
('X23', 1, 1), ('M12', 1, 1), ('C07', 1, 1), ('T16', 1, 1),
('B04', 2, 1), ('Z15', 2, 1), ('H11', 2, 1), ('R21', 2, 1),
('Y08', 3, 1), ('J19', 3, 1), ('D13', 3, 1), ('A02', 3, 1),
('G20', 4, 1), ('U06', 4, 1), ('N09', 4, 1), ('V18', 4, 1),
('L05', 5, 1), ('E14', 5, 1), ('P17', 5, 1), ('F22', 5, 1),
('S10', 6, 1), ('W03', 6, 1), ('K01', 6, 1), ('O07', 6, 1),
('I16', 7, 1), ('Q12', 7, 1), ('X02', 7, 1), ('M21', 7, 1),
('C19', 8, 1), ('T04', 8, 1), ('B09', 8, 1), ('Z22', 8, 1),
('H07', 9, 1), ('R13', 9, 1), ('Y20', 9, 1), ('J05', 9, 1),
('D16', 10, 1), ('G01', 10, 1), ('U08', 10, 1), ('M09', 10, 1),
('X14', 11, 1), ('A20', 11, 1), ('W17', 11, 1), ('L02', 11, 1),
('O04', 12, 1), ('K23', 12, 1), ('C06', 12, 1), ('S18', 12, 1),
('Y15', 13, 1), ('J02', 13, 1), ('D19', 13, 1), ('P08', 13, 1),
('B23', 14, 1), ('H04', 14, 1), ('N14', 14, 1), ('V07', 14, 1),
('F11', 15, 1), ('W22', 15, 1), ('T05', 15, 1), ('G18', 15, 1),
('X09', 16, 1), ('M14', 16, 1), ('C11', 16, 1), ('K07', 16, 1),
('E21', 17, 1), ('A03', 17, 1), ('L18', 17, 1), ('O12', 17, 1),
('J23', 18, 1), ('S02', 18, 1), ('N19', 18, 1), ('Q10', 18, 1),
('B12', 19, 1), ('U20', 19, 1), ('D05', 19, 1), ('V04', 19, 1),
('G22', 20, 1), ('T03', 20, 1), ('F19', 20, 1), ('W08', 20, 1),
('X13', 21, 1), ('M02', 21, 1), ('C20', 21, 1), ('K11', 21, 1),
('A19', 22, 1), ('Y06', 22, 1), ('L23', 22, 1), ('O10', 22, 1),
('J16', 23, 1), ('S21', 23, 1), ('D08', 23, 1), ('P14', 23, 1),
('B07', 24, 1), ('H20', 24, 1), ('N03', 24, 1), ('Q15', 24, 1);

INSERT INTO sensor (numSerie, fkEsteira, fkEmpresa) VALUES
('F02', 25, 1), ('W19', 25, 1), ('T09', 25, 1), ('G14', 25, 1),
('X20', 26, 1), ('M05', 26, 1), ('C16', 26, 1), ('K23', 26, 1),
('E02', 27, 1), ('A11', 27, 1), ('L07', 27, 1), ('O21', 27, 1),
('J19', 28, 1), ('S05', 28, 1), ('N12', 28, 1), ('Q03', 28, 1),
('B15', 29, 1), ('U18', 29, 1), ('D23', 29, 1), ('V06', 29, 1),
('G09', 30, 1), ('T14', 30, 1), ('F03', 30, 1), ('W11', 30, 1),
('X04', 31, 1), ('M20', 31, 1), ('C08', 31, 1), ('K17', 31, 1),
('E19', 32, 1), ('A07', 32, 1), ('L14', 32, 1), ('O05', 32, 1),
('J08', 33, 1), ('S12', 33, 1), ('N21', 33, 1), ('Q06', 33, 1),
('B03', 34, 1), ('H19', 34, 1), ('D20', 34, 1), ('P11', 34, 1),
('Y18', 35, 1), ('T07', 35, 1), ('F15', 35, 1), ('G02', 35, 1),
('X16', 36, 1), ('M23', 36, 1), ('C04', 36, 1), ('K09', 36, 1),
('E14', 37, 1), ('A02', 37, 1), ('L19', 37, 1), ('O16', 37, 1),
('J21', 38, 1), ('S09', 38, 1), ('N07', 38, 1), ('Q22', 38, 1),
('B06', 39, 1), ('U13', 39, 1), ('D03', 39, 1), ('V15', 39, 1),
('G11', 40, 1), ('T20', 40, 1), ('F08', 40, 1), ('W23', 40, 1);

INSERT INTO sensor (numSerie, fkEsteira, fkEmpresa) VALUES
('A24', 41, 1), ('C15', 41, 1), ('M09', 41, 1), ('X06', 41, 1),
('B17', 42, 1), ('E12', 42, 1), ('L08', 42, 1), ('O19', 42, 1),
('D23', 43, 1), ('F07', 43, 1), ('T14', 43, 1), ('Y05', 43, 1),
('G04', 44, 1), ('I22', 44, 1), ('P18', 44, 1), ('S11', 44, 1),
('H10', 45, 1), ('K20', 45, 1), ('U16', 45, 1), ('V09', 45, 1),
('J03', 46, 1), ('N21', 46, 1), ('Q13', 46, 1), ('W08', 46, 1),
('R06', 47, 1), ('Z14', 47, 1), ('B12', 47, 1), ('X19', 47, 1),
('C23', 48, 1), ('E09', 48, 1), ('M14', 48, 1), ('Y21', 48, 1);

update sensor set numSerie= 'A12' where idSensor =1;

select * from sensor;
SELECT COUNT(*) FROM esteira;
SELECT COUNT(*) FROM sensor;
SELECT fkEsteira, COUNT(*) FROM sensor GROUP BY fkEsteira;

CREATE TABLE monitoramento (
    idMonitoramento INT AUTO_INCREMENT PRIMARY KEY,
    fkSensor INT,
    produtoDetectado BOOLEAN, -- Perguntar para a Vivian
    dtMonitoramento DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkSensorMonit FOREIGN KEY (fkSensor)
        REFERENCES sensor(idSensor)
);