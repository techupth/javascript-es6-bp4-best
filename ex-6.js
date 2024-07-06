let height = undefined;
let result;

function checknull(cnull){
    return cnull ?? "Height is not defined";
} 

result = checknull(height)
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
