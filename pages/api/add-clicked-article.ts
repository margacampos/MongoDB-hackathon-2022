import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';
import { Event, getEventName } from '../../utils/eventUtils';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{success:boolean}>
) {
    let client; 

    if(process.env.MONGODB_URI && req.method==="POST"){
        client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("userClickedArticle");
            let body:{
                type:string;
                event:Event;
            } = JSON.parse(req.body);
            
            if(!body.event || !body.type || !body.event.title) res.json({success:false});

            const cursor = await events.insertOne({
                date:new Date(),
                type:body.type,
                event:body.event
            });

            res.status(200).json({success:true});
        } catch (error) {
            console.log(error)
            res.json({success:false})
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
