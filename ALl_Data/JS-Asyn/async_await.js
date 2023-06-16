const log = (param) =>console.log(param)

log("Working Fine")


function insertCard(cardDigit){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(cardDigit.length<5){
                reject("Invalid Card")
            }else if(cardDigit.length<7){
                log("Inserted a valid card")
                resolve("Savings Account")
            }else{
                log("Inserted a valid card")
                resolve("Current Account")
            }
        },3000)
    })
}

function selectAccount(cardType){
 log(`${cardType}  is Selected`)
}

function selectOptions(option){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        if(option=="withdraw"){
            resolve("withdraw")
            log(`you selected ${option}`)
        }else if(option=="debit"){
            resolve("debit")
            log(`you selected ${option}`)
        }else{
            reject("Please select debit or wthdraw")
        }
    })},3000)

}

function enterSecurityPin(optionSelected){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(optionSelected == "withdraw"){
            resolve("Enter security pin to withdraw")
            }else if(optionSelected=="debit"){
                resolve("Enter security pin to debit the cash")
            }else{
                reject("Error Occured")
            }
        },4000)
    })
}

function greetings(choosed){
    log(choosed)
    setTimeout(()=>
    {
        log("Thanks for choosing our bank")
    },6000)
}
async function oprateBankAtm(cardNumber,options){
    try{
        const cardType = await insertCard(cardNumber)
        selectAccount(cardType)
        const optionSelected = await selectOptions(options)
        const choosed = await enterSecurityPin(optionSelected)
       greetings(choosed)
    }
    catch(error) {
log(error)
    }
     
}
//oprateBankAtm("1234", "de")


async function fetchData(){
    try{
        const response = await fetch("https://restcountries.com/v3.1/all")
        const data = await response.json()
        document.body.style.textAlign ="center"
        if(data.message){
            document.body.innerHTML+=`<h1>${data.message}</h1>`  
        }
        data.forEach(element => {
            const createCuntryObject = {
                ...element,
                name:element.name.common,
                imageLink:element.flags.png,
                population:element.population,
                region:element.region,
                capital:element.capital
            }
          createCuntry(createCuntryObject)
        })
    }
    catch(error){
      log(error)
      
    }
}

function createCuntry({name,flags,population,region,capital}){
    document.body.innerHTML += `
    <div class="container">
    <img src="${flags}" alt="${name}" class="flag"/>
    <div class="info">
    <h2>${name}</h2>
    <p><span>Population: ${population}</span></P>
    <p><span>Region: ${region}</span></P>
    <p><span>Capital: ${capital}</span></P>
    </div>
    </div>
    `
}
fetchData()