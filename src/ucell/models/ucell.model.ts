import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UcellCreatAttr {
    region: string;
    items: number;
    units: number;
    subscribers: number;
}


@Table({tableName: "ucell", createdAt:false, updatedAt:false})
export class Ucell extends Model<Ucell, UcellCreatAttr>{

    @Column({
        type:DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type:DataType.STRING,
    })
    region: string;

    @Column({
        type:DataType.INTEGER,
    })
    items: number;

    @Column({
        type:DataType.INTEGER,
    })
    units: number;
    @Column({
        type:DataType.INTEGER,
    })
    subscribers: number;
   
}

