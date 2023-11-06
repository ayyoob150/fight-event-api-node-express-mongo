import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Fighter } from "./Fighter";

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
    id!: number;

  @ManyToOne(() => Fighter)
    fighter!: Fighter;
    
  @Column()
    rank!: number;

}





