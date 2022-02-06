//correct answer for all should be 15
const testList = [1,2,3,4,5];

function sumFor(list){
    let total = 0
    for (let i of list){
        total += i;
    }
    return total;
}

function sumWhile(list){
    let total = 0;
    let i = 0;
    while (i < list.length){
        total += list[i];
        i++;
    }
    return total;
}


function sumRecursion(list, l){
    if (l <= 0){
        return 0;
    }
    return (sumRecursion(list, l-1) + list[l-1]);
}
//needs to accept initial length of list
let n = testList.length;

function sumTheSimpleWay(list){
    return _.reduce(list, function(memo, num){return memo + num;});
}

//took 15:25
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList, n));
console.log(sumTheSimpleWay(testList));