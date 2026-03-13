let studentScore = 79
function getgrade(studentScore){
    switch(true){
        case studentScore >= 90:
            return "A"
        case studentScore>= 80:
            return "B"
        case studentScore>= 70:
            return "C"
        default :
            return "F"
    }}
    

    let grade = getgrade(studentScore)
    console.log("Grade = "+grade)