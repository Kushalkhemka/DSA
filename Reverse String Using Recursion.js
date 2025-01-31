let string="";
function reverseString(str) {
    if(str.length===0){
        return string;
    }
    string =string + str[str.length-1];
    return reverseString(str.slice(0, -1));
}

console.log(reverseString("yoyo master"));