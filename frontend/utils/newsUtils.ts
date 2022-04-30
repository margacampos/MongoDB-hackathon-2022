const getNewsTitle = async(url:string) =>{
    try {
        const res = await fetch(url);
        const data = await res.text()
        console.log("data: ")
        console.log(data);
        const match = data.match(/<title>(.+)<\/title>/);
        console.log("match: ")
        if (match) return match[1];
        else {
            console.log("No title available")
            return "error"
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