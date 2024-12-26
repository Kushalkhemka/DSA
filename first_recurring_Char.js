//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input){
    var obj=new Set();
    for(let i=0;i<input.length;i++){
        if(obj.has(input[i])){
            return input[i];
        }
        obj.add(input[i]);
    }
    return undefined;
}

console.log(firstRecurringCharacter([]));

//Bonus... What if we had this:
//
// return 5 because the pairs are before 2,2