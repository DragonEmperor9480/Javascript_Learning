arr = [1,2,3,4,5,6,7,8,9,10]
arr = [1,2,3,4,5,6,9,7,8,10]

function two(n)
{
    return n*2;
}
/**
 * map() method: It applies a given function on all the elements of the array and returns the updated array. 
 * It is the simpler and shorter code instead of a loop. The map is similar to the following code: 
 */
//map
console.log("map method: ") 
console.log(arr.map(two));

function sum(a,b)
{
    return a+b;
}

/**
 * reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function. 
 * It is an alternative of using a loop and updating the result for every scanned element. 
 * Reduce can be used in place of the following code: 
 */
//reduce
console.log("reduce method: ") 
console.log(arr.reduce(sum));

/**
 * filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition. 
 * It is a simpler and shorter code instead of the below code using a loop: 
 */
//filter
console.log("filter method: ") 
console.log(arr.filter(function (x){
    return x%2==0;
}))