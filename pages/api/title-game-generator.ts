// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]|"">
) {
    if(req.method!="POST")return res.status(404).send("");
    let client; 
    if(process.env.MONGODB_URI){
        client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("events");
            
            const cursor = events.aggregate<Event>([
              {
                '$match': {
                  'title': {
                    '$ne': null
                  }, 
                  'Actor1CountryCode': {
                    '$in': [
                      'GBR', 'USA', 'CEU', 'EEU', 'EUR', 'NMR', 'MDT', 'AUS', 'VGB', 'CAN', 'IMY'
                    ]
                  }
                }
              }, {
                '$sample': {
                  'size': 5
                }
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
                  'SourceURL': '$SOURCEURL', 
                  'Day': '$SQLDATE', 
                  'title': 1
                }
              }
            ]);

              let eventList:Event[] = await cursor.toArray();
            if(eventList)res.status(200).json(eventList);
        } catch (error) {
            console.log(error)
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
