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
            const events = database.collection("eventsCSV");
            let body = JSON.parse(req.body)
            let match = {
                'Day':{$gte:20220301},
                'GoldsteinScale': {
                  '$gte': 8
                }, 
                'NumArticles': 10, 
                'AvgTone': {
                  '$gte': 7
                }
              }
            if(body.actorCode!="")match.Actor1Type1Code= body.actorCode;
            if(body.countryCode!="")match.Actor1CountryCode=body.countryCode;
            if(body.eventRootCode!="")match.EventRootCode=body.eventRootCode;

            const cursor = events.aggregate<Event>([
              {
                '$match': match
              }, {
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
                  'SourceURL': 1,
                  'Day':1
                }
              }, {
                '$skip': 0
              }, {
                '$limit': 10
              }, {
                '$sample': {
                  'size': 5
                }
              }
            ]);

              let eventList:Event[] = await cursor.toArray();
              for (let i=0; i<eventList.length; i++){
                let url = eventList[i].SourceURL;
                // if(url!=undefined)eventList[i].title = await convertToTitles(url);
                if(url!=undefined)eventList[i].title = getEventName(eventList[i]);

              }
            res.status(200).json(eventList); //Change to notice when titles are missing
        } catch (error) {
            console.log(error)
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
