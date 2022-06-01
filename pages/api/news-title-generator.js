import { MongoClient, WithId } from 'mongodb';

export default async function handler(
  req,
  res
) {
    if(req.method==="POST"){
   let body;
   if(typeof req.body ==="object" && req.body.key){
        body = {key: req.body.key};
      }else{
        body = JSON.parse(req.body);
      }
    if (process.env.MONGODB_URI && body && process.env.KEY===body.key){
     
      let client=new MongoClient(process.env.MONGODB_URI);
      try {
        await client.connect();
        const database = client.db(process.env.MONGODB_DB);
        const events = database.collection("events");
        events.find({}).forEach(async(doc) => {
          let title = await getTitle(doc.SOURCEURL);
          if(title!="error"){
            await events.updateOne(
              { _id: doc._id },
              { $set: { title: title } }
            )
          }else{
            await events.deleteOne({_id:doc._id});
          }
          
        }
        )
        
        res.status(200).send({success:true});
       } catch (error) {
          res.status(404).send({success:false, error});
       } 
    }
   
}
res.status(404).send();

const getTitle = async(url) =>{
  try {
    const response = await fetch(url);
  const data = await response.text();
  const match = data.match(/<title>(.+)<\/title>/);
  const desc = data.match(/<meta name="description" content="(.+)"/);
  if(response.status!=404 && match) return match[1];
  else return "error";
  } catch (error) {
    return "error";
  }
  
  //.send({data:{title:match[1], desc:desc?desc[1]:undefined}, success:true});
}
} 