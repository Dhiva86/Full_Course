const log = (params)=>console.log(params)

log("Working")

let timeElement = document.createElement("div")
document.body.append(timeElement)
timeElement.style.textAlign = "center"

setTimeout(()=>{
 timeElement.textContent="10"
 setTimeout(()=>{
    timeElement.textContent="09"
    setTimeout(()=>{
        timeElement.textContent="08"
        setTimeout(()=>{
            timeElement.textContent="07"
            setTimeout(()=>{
                timeElement.textContent="06"
                setTimeout(()=>{
                    timeElement.textContent="05"
                    setTimeout(()=>{
                        timeElement.textContent="04"
                        setTimeout(()=>{
                            timeElement.textContent="03"
                            setTimeout(()=>{
                                timeElement.textContent="02"
                                setTimeout(()=>{
                                    timeElement.textContent="01"
                                    setTimeout(()=>{
                                        timeElement.textContent="IT'S TIME"
                                       },2000)
                                   },1000)
                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)
   },1000)

},1000)