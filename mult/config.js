const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'seu-host',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'sua-base-de-dados',
});

const config = {
  dono: '559184035474',
  tempo_teste: 3,
  valorLogin: 0.10,
  nomeLoja: 'Loja teste',
  linkApp: 'LinkAqui',
  token_mp: 'TokenAqui'
};

connection.connect((err) => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados');
  
  connection.query('INSERT INTO configuracoes SET ?', config, (err, results) => {
    if (err) {
      console.error('Erro ao inserir configuração:', err);
      return;
    }
    console.log('Configuração inserida com sucesso:', results);
  });

  connection.end();
});