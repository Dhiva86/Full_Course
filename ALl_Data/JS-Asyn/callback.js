const log =(param)=> console.log(param)

function insetCard(callback){
 log("Step 1: Insert the card")
 setTimeout(callback, 2000)
}

function selectAccount(callback){
log("step 2: Select the Account option")
callback()
}

function enterThePin(callback){
log("step 3: Enter the Account Pin")
setTimeout(callback, 3000
)}

function selectOption(callback){
log("Step 4: Select the Amount")
callback()
}

function withdrawTheCash(){
log("Step 5: Withdram the Amount")
}

function withdramCashFromATM(){
    insetCard(()=>{selectAccount(()=>{
        enterThePin(()=>{
            selectOption(()=>{withdrawTheCash()
            })
        })
    })
}
    )
}
withdramCashFromATM()