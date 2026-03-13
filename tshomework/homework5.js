
function launchBrowser(browserName){
    if(browserName === "chrome"){
        console.log("passed")}
    else{
        console.log("failed")
    }}
function runTests(testTypes){
    switch(testTypes){
    case "smoke":
        console.log("running smoke testing")
        break
    case "sanity":
        console.log("running sanity testing") 
        break 
    case "regression":
        console.log("running regression testing")
        break
    default:
        console.log("running other testing")
        break
    }}
launchBrowser("chrome")
runTests("smoke")