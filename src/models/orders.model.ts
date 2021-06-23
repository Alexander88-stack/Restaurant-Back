import {Model, Sequelize, DataTypes} from 'sequelize';
import {database} from '../database';

export class Orders extends Model {

    public id!: number;
    public nameAndRol!: string;
    public table!: number;
    public products!: string;
    public persons!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Orders.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    nameAndRol: {
        type: DataTypes.STRING,
        
        allowNull: true,
        
        
        

    },
    table: {
        type: DataTypes.INTEGER,
        
        allowNull: true,
        
        

    },
    products: {
        type: DataTypes.STRING,
        
        allowNull: true,
        
        

    },
    persons: {
        type: DataTypes.STRING,
        
        allowNull: true,
        
        

    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    }

},{
    tableName: 'orders',
    sequelize: database 
    


});
