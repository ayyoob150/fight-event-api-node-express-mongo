import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToOne, Column } from "typeorm";
import { Fighter } from "./Fighter";
import { Event } from "./Event";

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  winType?:string;

  @ManyToOne(() => Fighter)
  @JoinTable()
  contestant1!: Fighter;

  @ManyToOne(() => Fighter)
  @JoinTable()
  contestant2!: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.wonFights)
  @JoinTable()
  winner?: Fighter;

  @ManyToOne(() => Fighter, (fighter) => fighter.lostFights)
  @JoinTable()
  loser?: Fighter;

  @ManyToOne(() => Event, (event) => event.fights)
  // @JoinTable()
  event?: Event;

}