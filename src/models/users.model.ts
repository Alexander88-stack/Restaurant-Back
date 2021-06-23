import {Model, DataType, Sequelize, DataTypes} from 'sequelize';
import {database} from '../database';

export class User extends Model {

    public id!: number;
    public username!: string;
    public mail!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    comparePassword!: () => Promise<boolean>;

}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false

    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

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
    tableName: 'users',
    sequelize: database 
    


})