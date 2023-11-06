import { Request, Response } from "express";
import { dataSource } from "../db/db";
import { Event, Event as Events } from "../entities/Event";
import { Fight } from "../entities/Fight";
import { Fighter } from "../entities/Fighter";
import { In } from "typeorm";

const eventPost = async (req: Request, res: Response) => {
  const {name, location,date} = req.body;

  try {
    // const fighterRepository = dataSource.getRepository(Fighter);

    // const fighters = await fighterRepository.find({
    //   // relations: {
    //   //   wonFights: true,
    //   //   lostFights: true,
    //   // },
    //   where: {
    //     id: In([fighter1Id,fighter2Id]),
    //   },
    // });
    // if (fighters.length > 1) {
      
      // let fightArr = []
      const fightData = new Fight();

      // fightData.contestant1 = fighters[0];
      // fightData.contestant2 = fighters[1];

      // const fightRepo = dataSource.getRepository(Fight);

      // const fightEvent = await fightRepo.manager.save(fightData)


      // fightArr.push(fightData)

      // console.log(fightEvent);
      
      const eventRepo = dataSource.getRepository(Events);


      const eventData = new Events();
      eventData.name = name;
      eventData.date = date;
      eventData.location = location;
      // eventData.fights = [fightEvent]

      await eventRepo.manager.save(eventData)

      res.json({ status: "ok", error: "no error" });
    // } else {
    //   return res
    //     .status(404)
    //     .json({ status: "not found", error: "Fighters not found" });
    // }
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: "error", error: "Error event or fight not created" });
  }
};

const eventGet = async (req: Request, res: Response) => {
  try{

  const eventRepo = dataSource.getRepository(Event)
  const eventData = await eventRepo.find(
    {
      relations:{
        fights:{
          contestant1:true,
          contestant2:true,
          winner:true,
          loser:true,
        }
      }
    }

  )
  
  res.json(eventData)

  }catch(e){

  }
}

export {eventPost, eventGet};
