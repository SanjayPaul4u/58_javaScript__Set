console.log("This is tutorial 58");

//SET IS STORE UNIQUE VALUE
const mySet = new Set();//INITIALIZE THE SET
console.log("The set look likes: ", mySet);

//ADDING VALUES IN SET
mySet.add("this");
mySet.add("This is sanjay");
mySet.add("that");
mySet.add("this");
mySet.add("this");
mySet.add(100);
mySet.add(true);
mySet.add(false);

console.log("The set look likes like now: ", mySet);


// //INTIALIZE NEW SET- use constructor
// const mySet2 = new Set(["this", 1, false, {a:1, b:2}])
// console.log("The new set: ",mySet2);


//GET SIZE OF THIS SET
let size = mySet.size;
console.log("The size of this set is : ", size);

//HAS
console.log(mySet.has(100)); 

//DELETE VALUE FROM SET
console.log("Before removal the set is: ", mySet.has("this"));
mySet.delete("this")
console.log("After removal the set is: ", mySet.has("this"));


//ITERATING THE SET-we can use for-of-loop & for-Each-loop
for(item of mySet){
    // console.log(item);
}

mySet.forEach((item)=>{
    // console.log(item);
})


// QUICK QUIZE : CAN WE USE Array.from(mySet) TO CONVERT SET INTO ARRAY??

Array.from(mySet).forEach((item)=>{
    // console.log(item)
});

//=> ANSWERE IS: YES WE CAN.




//BY ME- IT WAS OPTIONAL
//WE MAKING ONE ARRAY AND IT HAVE DUPLICATE VALUE, SO WE CONVER ARRAY INTO ONE SET, AND WE SUCCESSFULLY REMOVE THIS DUPLICATE VALUE, AND AFTER THAT WE CONVERT TO SET INTO ARRAY  
let oneArray = [1, 2, 1, "this", true, "this", true];
console.log(oneArray);
let oneSet =new Set(oneArray);
console.log(oneSet);

let modOneArr = Array.from(oneSet);
console.log(modOneArr);

