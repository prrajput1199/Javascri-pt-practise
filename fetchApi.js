//fetch text
fetch(`sample.txt`).then((response)=>{
    if(!response.ok){
        throw new Error(`Network is not responding`);
    }
    else{
        return response.text();
    }
}).then((data)=>{
    console.log(data);
})

// fetch api
fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=>{
return res.json();
}).then((data)=>{
    data.forEach(element => {
        console.log(element.body);
    });
})