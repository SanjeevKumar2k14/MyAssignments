let emp= "eleven"
let rev =""
for(let i=emp.length;i>=0;i--){
    rev= rev+emp.charAt(i)
    console.log(emp.charAt(i))
}
console.log(rev)

let reve = emp.split("").reverse().join("")
console.log(reve)