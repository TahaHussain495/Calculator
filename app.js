// let display = document.getElementById("cal")
// let buttons = document.querySelectorAll("button")

// let buttonsArray = Array.from(buttons)
// let string = ''


// buttonsArray.forEach(btn => {

//    btn.addEventListener("click" , function(event){
     
//     if ( event.target.innerHTML == "DEL") {
//         string = string.substring(0 , string.length-1)
//         display.value = string
//      } else if  ( event.target.innerHTML == "AC" ){
        
//         string = ''
//         display.value = string
//        }  else if  ( event.target.innerHTML == "=" ){
//             string = eval(string)
//             display.value = string
//       } else {  
//           string += event.target.innerHTML
//           display.value = string

//     }
    

    
    
    
//  

// })









let display = document.getElementById("input")
let dis = document.getElementById("output")
let merge = "";
let operators = ["+" , "-" , "*" , "/"]


function callInput(a) {
   
    let lastChar = display.value[display.value.length -1]
    //  if ( merge.indexOf(a) !== -1) {
    //     dis.value = display.value + a
    //  } 
        if (a == "=") {
        display.value = eval(display.value)
    } else if ( a == "C") {
    display.value = display.value.slice(0,-1);
        
   } else if ( a == "CE") {
    display.value = ""
        
   } else if (operators.indexOf(lastChar) !==-1 && operators.indexOf(a) !==-1 ) {
    // display.value = lastChar
    console.log(lastChar);
    display.value = display.value.slice(0 , -1) + a
    
        
   }else {
         merge = display.value + a
         display.value = merge
    }
    
}































