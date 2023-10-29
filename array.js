//Arrays are reference values
//Arrays are an object ; Index of the arrays are considered as keys

//Index is started from 0
//Length is started from 1

//Declaring an Array

//Initializing using square brackets

const arr = [1,2,3,4,5,6]

//Initializing using 'new' keyword

const arr1 = new Array('Ahmed','Salman','Rafay','Ishaan')

//Methods on Arrays
 
//length : returns length of the array

console.log(arr.length);


//push : adds a new value to the end of the array
//return new length of the array

console.log(arr.push(7)); // Output : 7 

// pop : removes the last element of the array
//overwrites the original array

// shift : deletes the first value to the start of the array  
//*returns the value it took out* if the task is complete 
//returns -1 if the array is empty

console.log(arr.shift())


// Unshift : adds a new element to the start of an array 
// returns the new length

console.log('Unshift',arr.unshift(1))

// indexOf : returns the index of the element in the array 
//returns -1 if it can not find

console.log(arr1.indexOf('Salman')) //output : 1

//now we add another element as a duplicate

arr1.push('Salman')

//now if we wish to find the second occurence of the Salman it would be a problem as it returns the first time it matches 
//but we can also pass a second parameter which basically tells from where should the search start

console.log(arr1.indexOf('Salman',2)); //output : 4

// lastIndexOf : starts searching for element from the end 

console.log(arr1.lastIndexOf('Salman'))

// inculdes : returns true if the value passed is included in the array

console.log(arr1.includes('Ahmed'));





