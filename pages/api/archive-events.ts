// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';
import { Event, getEventName } from '../../utils/eventUtils';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
    let client; 

    if(process.env.MONGODB_URI && req.method==="POST"){
        client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("events");
            let body = JSON.parse(req.body)
            let match:any =(body.actorCode!=""||body.eventRootCode!=""||body.countryCode!="")?{"$and":[]}:{};
            if(match.$and){
              if(body.actorCode!="")match.$and.push({ $or: [ { Actor1Type1Code: body.actorCode}, { Actor2Type1Code : body.actorCode } ] });
              if(body.countryCode!="")match.$and.push({ $or: [ {Actor1CountryCode:body.countryCode}, { Actor2CountryCode : body.countryCode} ] });
              if(body.eventRootCode!="")match.$and.push({EventCode:body.eventRootCode});
            }
            
            const cursor = events.aggregate<Event>([
              {
                '$match': match
              },
              {
                '$skip': 5*body.row
              },
              {
                '$limit': 5
              },
              {
                '$project': {
                  '_id': 0, 
                  'actor1': '$Actor1Type1Code', 
                  'actor2': '$Actor2Type1Code', 
                  'eventCode': '$EventCode', 
                  'location1': '$Actor1CountryCode', 
                  'location2': '$Actor2CountryCode', 
                  'GoldsteinScale': 1, 
                  'AvgTone': {
                    '$toDecimal': '$AvgTone'
                  }, 
                  'SourceURL': '$SOURCEURL', 
                  'Day': '$SQLDATE', 
                  'title': 1
                }
              }
            ]);

              let eventList:Event[] = await cursor.toArray();
            res.status(200).json(eventList);
        } catch (error) {
            console.log(error)
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
