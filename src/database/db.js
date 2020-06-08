// Importar a dependência do SQLite3
const sqlite3 = require("sqlite3").verbose()

// Cria o objeto que irá realizar operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//Utilizar o objeto de db para nossas operações

// db.serialize(() => {
//     // Cria uma tabela com comandos sql

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
        
//     // // Insere dados
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `

//     // const values = [
//     //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//     //     "Colectoria",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Resíduos Eletrônicos, Lâmpadas"
//     // ]

//     // function afterInsertData(err) {

//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)

//     // }

//     // db.run(query, values, afterInsertData)


//     // //Consultar dados da tabela

//     db.all(`SELECT * FROM places`, function(err, rows) {

//         if (err) {
//             return console.log(err)
//         }

//         console.log(err)
//         console.log(rows)
//     })

//     //Deletar dados da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [2], function(err) {

//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso!")
//     // })

    
// })