let time=()=>{
    let element=document.querySelector("h1")
    let date=new Date()
    hours=date.getHours()
    min=date.getMinutes()
    sec=date.getSeconds()
     week=date.getDay()
     let w=["sunday","monday","tuesday","wenseday","thursday","friday","saturday"]
     weeks=w[week]
     let day;
     day=hours<12?"am":"pm"
     hours=hours<10?`0${hours}`:hours;
     min=min<10?`0${min}`:min;
     sec=sec<10?`0${sec}`:sec;
     element.innerHTML=`${hours}:${min}:${sec}:${day}:${weeks}`


}

setInterval(()=>{
    time()
},1000)




