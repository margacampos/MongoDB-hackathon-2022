const getNewsTitle = async(url:string) =>{
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN+"/api/news-title-generator", {
            method:"POST",
            body: JSON.stringify({url:url}),
            headers: {
                'Content-Type': 'application/json'
              }
        });
        const data = await res.json()
        if (data.success) return data.data;
        else {
            if (data.error)return data.error;
            return "fetch data came back";
        };
    } catch (error) {
        console.log(error)
        return "error";
    }
}
const setArticleClicked = async(event:any, type:string) =>{
    if(!event||!type)return console.log("error");
    let article;
    if(typeof event.title != "string"){
        article = {
            SourceURL: event.SourceURL,
            title: event.title.join(),
            AvgTone: event.AvgTone,
            eventCode: event.eventCode,
            actor1:event.actor1,
            actor2:event.actor2,
            location1:event.location1,
            location2:event.location2,
            Day:event.Day,
            GoldsteinScale:event.GoldsteinScale
          }
    }
    await fetch("/api/add-clicked-article", {
        method: "POST",
        body: JSON.stringify({event:article?article:event, type:type})
      });
}
const variants = {
    enter:(value:{enter:string, center:string, exit:string, duration:string})=>{
        return({
        translateX:value.enter,
        opacity: 0,
        transition:{
          duration:value.duration
        }
    });
      
    },
    center: (value:{enter:string, center:string, exit:string, duration:string})=>{
        return({
        translateX:value.center,
        opacity: 1,
        transition:{
            duration:value.duration
          }
        });
    },
    exit: (value:{enter:string, center:string, exit:string, duration:string})=>{
        return({
        translateX:value.exit,
        opacity: 0,
        transition:{
          duration:value.duration
        }
    });
    }
  };
const valueD = {
    enter: "-60%",
    center:"-50%",
    exit:"-40%",
    duration:0.5
}
const valueI = {
    enter: "10%",
    center:"0%",
    exit:"-10%",
    duration:0.3
}
const valueP = {
    enter: "100%",
    center:"0%",
    exit:"-100%",
    duration:0.8
}
const pageVariants = {}
// { 
//     mode: 'no-cors' // 'cors' by default
// }
export {getNewsTitle, variants, valueD, valueI, valueP, setArticleClicked};