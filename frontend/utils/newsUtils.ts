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

// { 
//     mode: 'no-cors' // 'cors' by default
// }
export {getNewsTitle};