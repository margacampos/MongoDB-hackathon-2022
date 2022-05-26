// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';
import { Event, getEventName } from '../../utils/eventUtils';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
    let client; 
    const convertToTitles = async(url:string) => {
      const response = await fetch("http://localhost:3000/api/news-title-generator?url="+url);
      const result = await response.json();
      if (result.success)return(await result).data.title;
      else return;
    }
    
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
              // for (let i=0; i<eventList.length; i++){
              //   let url = eventList[i].SourceURL;
              //   // if(url!=undefined)eventList[i].title = await convertToTitles(url);
              //   if(url!=undefined)eventList[i].title = getEventName(eventList[i]);

              // }
            if(eventList[0].title)res.status(200).json(eventList);
        } catch (error) {
            console.log(error)
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
