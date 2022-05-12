// Hello, Name or World!
function hello(name) {
  let newName
   if (name) {
    let lowCase =  name.toLowerCase()
    newName = lowCase[0].toUpperCase() + lowCase.slice(1)
    return "Hello, " + newName + "!" 
 } else {
   return "Hello, World!" 
 }
}