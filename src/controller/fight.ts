import { Request, Response } from "express";
import { dataSource } from "../db/db";
import { Event } from "../entities/Event";
import { Fight } from "../entities/Fight";
import { Fighter } from "../entities/Fighter";
import { In } from "typeorm";

const fightPost = async (req: Request, res: Response) => {
  const { fighter1Id, fighter2Id, eventId } = req.body;

  try {
    const fighterRepository = dataSource.getRepository(Fighter);

    const fighters = await fighterRepository.find({
      where: {
        id: In([fighter1Id, fighter2Id]),
      },
    });

    const eventRepo = dataSource.getRepository(Event);
    const eventData = await eventRepo.findOne({
      where: {
        id: eventId,
      },
    });
    if (eventData && fighters.length > 1) {
      const createFight = new Fight();
      createFight.winType = ""
      createFight.contestant1 = fighter1Id;
      createFight.contestant2 = fighter2Id;
      createFight.event = eventData;
      const fightRepo = dataSource.getRepository(Fight);
      await fightRepo.manager.save(createFight);
      res.json({ status: "ok", error: "" });
    } else
      res.json({ status: "denied", error: "event or fighters doesn't exist" });
  } catch (e) {
    console.log(e);
    res.json({ status: "denied", error: "error fight details not created" });
  }
};

const fightUpdate = async (req: Request, res: Response) => {
  const { id, winType, winnerId } = req.body;

  try {
    const fighterRepo = dataSource.getRepository(Fight);

    let fightData = await fighterRepo.findOne({
      relations: {
        contestant1: true,
        contestant2: true,
        event: true,
      },
      where: 
       
        [
          {  id,contestant1: { id: winnerId } },
          {  id, contestant2: { id: winnerId } },
        ]
      
    });

    const winnerFighter = (winner:string,id: number) => {
      if(winner === "winner"){
        if (id === fightData?.contestant1?.id) {
          return fightData?.contestant1;
        } else {
          return fightData?.contestant2;
        }
      }

      if(winner === "loser"){
        if (id !== fightData?.contestant1?.id) {
          return fightData?.contestant1;
        } else {
          return fightData?.contestant2;
        }
      }
      
    };


    if (fightData) {
      fightData.winType = winType;
      fightData.winner = winnerFighter("winner",winnerId);
      fightData.loser = winnerFighter("loser",winnerId);
     const dataupdate =  await fighterRepo.manager.save(fightData);
     

      return res.json({ status: "ok", error: "" });
      
    }
    res.json({ status: "denied", error: "fight not update , fighter not exist in the fight" });
  } catch (e) {
    console.log(e);
    res.json({ status: "denied", error: "fight not update" });
  }
};

const fightGet = async (req: Request, res: Response) => {
  try {
    const fightRepo = dataSource.getRepository(Fight);
    const fightData = await fightRepo.find({
      relations: {
        event: true,
        contestant1: true,
        contestant2: true,
        winner: true,
        loser: true,
      },
    });
    res.json(fightData);
  } catch (e) {}
};

export { fightPost, fightUpdate, fightGet };
