import { MongoClient, WithId } from 'mongodb';

export default async function handler(
  req,
  res
) {
    if(req.method==="GET" && process.env.MONGODB_URI){
      // let {url} = req.query;
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
    // if(req.method==="POST" && req.body){
    //   const body = JSON.parse(req.body)
    // console.log(body)
    //    try {
    //      res.send({title:"hola"})
    //     //  console.log(body.url)
    //     // const response = await fetch(body.url);
    //     // const data = await response.text();
    //     // const match = data.match(/<title>(.+)<\/title>/);
    //     // const desc = data.match(/<meta name="description" content="(.+)"/);
    //     // if (response.status!=404 && match) res.status(200).send({data:{title:match[1], desc:desc?desc[1]:undefined}, success:true});
    //     // else res.status(200).send({success:false, error:"page not found"});
    //    } catch (error) {
    //       res.status(404).send({success:false, error});
    //    } 
    // }
  res.status(404);
}

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