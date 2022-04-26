// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event>
) {
    let client; 
    if(process.env.MONGODB_URI){
        client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("eventsCSV");
            const query = { Day: 20220406 };
            const event:Event|null = await events.findOne<Event>(query,{
                // sort matched documents in descending order by rating
                sort: { Day: -1 },
                // Include only the `title` and `imdb` fields in the returned document
                projection: { _id: 0, actor1:"$Actor1Type1Code", actor2:"$Actor2Type1Code", eventCode:"$EventCode", location:"$ActionGeo_Fullname" }
              });
              // since this method returns the matched document, not a cursor, print it directly
            console.log(event);
            if(event)res.status(200).json(event);
        } catch (error) {
            console.log(error)
        } finally{
            await client.close();
        }
    };
    
    
  res.status(404)
}
