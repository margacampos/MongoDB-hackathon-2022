// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
    let client; 
    if(process.env.MONGODB_URI){
        client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("recentEvents");
            const query = { Actor1Type1Code:{$ne:null}, Actor2Type1Code:{$ne:null} };
            const cursor = events.find<Event>(query,{
                // Include only the `title` and `imdb` fields in the returned document
                projection: { _id: 0, actor1:"$Actor1Type1Code", actor2:"$Actor2Type1Code", eventCode:"$EventCode", location1:"$Actor1CountryCode", location2:"$Actor2CountryCode", GoldsteinScale:1, AvgTone:{$toDecimal:"$AvgTone"}}
              }).sort({AvgTone:1}).limit(5);
              // since this method returns the matched document, not a cursor, print it directly
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
