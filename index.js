console.log("dziala")
const registersValueInputs = document.querySelectorAll('.registersValue input')

const registersValueView = document.querySelectorAll('.registersValueView div')

const btnSetValues =document.querySelector('button.setValues')

const btnUse = document.querySelector("div.btnUse button")

const method = document.getElementById('method-select')
const registersSour = document.getElementById('registersSour-select')
const registersDest = document.getElementById('registersDest-select')


const valuesArr = []

const setValues = (e)=>{
    console.log("fxisls")
    const isEmptyString = valuesArr.some((value)=>{
       
            return value===""
    })
  
    if(valuesArr.length<4 || isEmptyString)      
        return alert("Set All Values")
    registersValueView.forEach((div, index)=>{
        
        div.textContent=valuesArr[index]
    })
    valuesArr.length=0
    registersValueInputs.forEach((input, index)=>{
        input.value=""
      })   
    
}
btnSetValues.addEventListener("click", (e)=>setValues(e))
registersValueInputs.forEach((input, index)=>{
    
    input.addEventListener("input", (e)=>{
        console.log(e.target.value)
        input.setAttribute('value', e.target.value)
        valuesArr[index]=input.getAttribute('value')
    })
    
  })   

  
const mov = (sour, dest)=>{
    let sourValue
    registersValueView.forEach((value)=>{
        console.log(value.dataset)
        if(value.dataset.name===sour)
            sourValue=value.textContent
      
        

    })
    registersValueView.forEach((value)=>{
        console.log(value.dataset)

        if(value.dataset.name===dest)
            value.textContent=sourValue
        

    })
}

let selectOption
let selectRegisterSour
let selectRegisterDest



  btnUse.addEventListener("click", (e)=>{
   
   
    const selectOption = method.options[method.selectedIndex].value
      
    const selectRegisterSour = registersSour.options[registersSour.selectedIndex].value
      
    const selectRegisterDest = registersDest.options[registersDest.selectedIndex].value
      console.log(selectOption, selectRegisterSour, selectRegisterDest)

      switch(selectOption){
        case 'mov':
            mov(selectRegisterSour, selectRegisterDest)
      }
  })


  

  