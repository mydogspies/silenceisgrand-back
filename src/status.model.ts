import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Status extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    id: string;

    @Column({
        type: DataType.TINYINT,
        allowNull: false
    })
    online: string;
}
