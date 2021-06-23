"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Orders extends sequelize_1.Model {
}
exports.Orders = Orders;
Orders.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nameAndRol: {
        type: sequelize_1.DataTypes.STRING,
        // primaryKey: true,
        // defaultValue: Sequelize.literal('nameAndRol'),
        allowNull: true,
    },
    table: {
        type: sequelize_1.DataTypes.INTEGER,
        // primaryKey: true,
        // defaultValue: Sequelize.literal('table'),
        allowNull: true,
    },
    products: {
        type: sequelize_1.DataTypes.STRING,
        // primaryKey: true,
        // defaultValue: Sequelize.literal('products'),
        allowNull: true,
    },
    persons: {
        type: sequelize_1.DataTypes.STRING,
        // primaryKey: true,
        // defaultValue: Set.bind(''),
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'orders',
    sequelize: database_1.database // esto es la parte mas importante,conecta a la base de datos
});
