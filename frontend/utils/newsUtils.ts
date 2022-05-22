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
            console.log(data)
            if (data.error)return data.error;
            return "fetch data came back";
        };
    } catch (error) {
        console.log(error)
        return "error";
    }
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
        opacity: 1
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
    duration:1
}
const pageVariants = {}
// { 
//     mode: 'no-cors' // 'cors' by default
// }
export {getNewsTitle, variants, valueD, valueI, valueP};