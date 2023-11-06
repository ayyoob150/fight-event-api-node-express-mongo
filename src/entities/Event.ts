import { Entity, PrimaryGeneratedColumn, Column,OneToMany, JoinTable, Unique } from "typeorm";
import { Fight } from "./Fight";

@Entity()
@Unique(["name"])
export class Event {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    name!: string;

  @Column()
    location!: string;

  @Column()
    date!: Date;

  @OneToMany(() => Fight, (fight) => fight.event, {cascade:true})
  @JoinTable()
    fights?: Fight[];
}