// Посредством деструктуризации получаем клиент из пакета mongodb
// const {MongoClient} = require('mongodb');

// Создаём объект данного клиета
// const client = new MongoClient('mongodb+srv://gelo:<23062001>@cluster0.e5bl7bf.mongodb.net/mongo?retryWrites=true&w=majority');

// Создаём функцию, которая будет коннектится с БД и создавать приложение
// const start = async() => {
//   try {
//     await client.connect();
//     console.log('Соединение установлено');
//     await client.db().createCollection('users')
//     const users = client.db().collection('users')
//     await users.insertOne({name: "ulbi tv", age: 21})
//     const user = await users.findOne({name: "ulbi tv"})
//     console.log(user)
//   } catch (e) {
//     console.log(e);
//   }
// }

// start()

