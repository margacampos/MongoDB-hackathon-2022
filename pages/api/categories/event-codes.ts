import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient} from 'mongodb';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    if(req.method==="GET" && process.env.MONGODB_URI){
        let client=new MongoClient(process.env.MONGODB_URI);
        try {
            await client.connect();
            const database = client.db(process.env.MONGODB_DB);
            const events = database.collection("events");

            const cursor = events.aggregate([
                    {
                      '$project': {
                        'EventCode': 1
                      }
                    }, {
                      '$group': {
                        '_id': null, 
                        'EventCode': {
                          '$addToSet': '$EventCode'
                        }
                      }
                    }, {
                      '$project': {
                        '_id': 0
                      }
                    }
                  ]);
              let eventList = await cursor.toArray();
            if(eventList)res.status(200).json(eventList);
        } catch (error) {
            res.send(404)
        }finally{
            await client.close();
        }
    }
    
  res.status(404)
}
