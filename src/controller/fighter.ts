import { Request, Response } from "express";
import { dataSource } from "../db/db";
import { Fighter, Fighter as Fighters } from "../entities/Fighter";
import { getWeightClass } from "../enum/weightClass";

const fighterPost = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const fighterRepo = dataSource.getRepository(Fighters);
    const fighterData = new Fighters();
    fighterData.name = data.name;
    fighterData.weight = data.weight;
    fighterData.nationality = data.nationality;
    fighterData.weightClass = getWeightClass(data.weight);

    await fighterRepo.manager.save(fighterData);


    res.json({status:"ok",error:"no error"});
  } catch (e) {
    console.log(e);
    res.json({status:"denied",error:"error to create fighter details"});
  }
};

const fighterGet = async (req: Request, res: Response) => {
  try{

  const fighterRepo = dataSource.getRepository(Fighter)
  const fighterData = await fighterRepo.find(
    {
      relations:{
        wonFights:true,
        lostFights:true
      }
       
    }

  )
  
  res.json(fighterData)

  }catch(e){

  }
}



export {fighterPost,fighterGet};
