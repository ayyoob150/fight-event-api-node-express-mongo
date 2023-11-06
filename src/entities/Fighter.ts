import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  Unique,
} from "typeorm";
import { Fight } from "./Fight";
import { WeightClass } from "../enum/weightClass";

@Entity()
@Unique(["name"])
export class Fighter {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  weight!: number;

  @Column({ type: "enum", enum: WeightClass })
  weightClass!: WeightClass;

  @Column()
  nationality!: string;

  @OneToMany(() => Fight, (fight) => fight.winner)
  // @JoinTable()
  wonFights?: Fight[];

  @OneToMany(() => Fight, (fight) => fight.loser)
  // @JoinTable()
  lostFights?: Fight[];
}
