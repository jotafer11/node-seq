import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ProductModel = db.define(
    
    'product', {

    sku: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    qty: { type: DataTypes.INTEGER },
    price: { type: DataTypes.INTEGER },

    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: "product"
    });





export default ProductModel