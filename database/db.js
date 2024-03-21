import { Sequelize  } from "sequelize";

const db = new Sequelize('inventorydb', 'root', '12345', {
    
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})



export default db;