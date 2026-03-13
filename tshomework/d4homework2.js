let name = "we are going to the movies by going through a mall"
let search = "going"
let sm = name.split(" ")
let count=0
for(let i=0; i<sm.length; i++){
    if(sm[i]===search){
        count++
    }
}console.log("the word "+search+" appeared in "+count+" of times")