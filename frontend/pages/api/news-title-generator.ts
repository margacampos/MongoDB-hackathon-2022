import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data?:{
      title:string;
      desc?:string;
    };
  success:boolean;
  error?:unknown;
  desc?:string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.body)
    if(req.method==="POST" && req.body.url){
       try {
        const response = await fetch(req.body.url);
        const data = await response.text();
        const match = data.match(/<title>(.+)<\/title>/);
        const desc = data.match(/<meta name="description" content="(.+)"/);
        if (response.status!=404 && match) res.status(200).send({data:{title:match[1], desc:desc?desc[1]:undefined}, success:true});
        else res.status(200).send({success:false, error:"page not found"});
       } catch (error) {
          res.status(404).send({success:false, error});
       } 
    }
  res.status(404);
}
