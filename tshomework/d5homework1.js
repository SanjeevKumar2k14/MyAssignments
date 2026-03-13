let word = "school"
let word1 = word.split("")
let rev1 = ""
for (let i=word1.length-1;i>=0;--i){
    rev1 = rev1+word1[i]

}console.log(rev1)
function palindrome(){
    if(word === rev1){
        console.log(word+" is a palindrome")
    }
    else{
        console.log(word+" is not a palindrome")
    }

}palindrome()