
function func(){
    
    let arr = ["Arjun", "Akshay", "Manish", "Saloni"];
    
    let item = arr.shift();   //shift function can remove first element of given array 
                            // pop() function remove last element of array

    console.log("Remove element: " + item);
    console.log("Remaining element: " + arr)
}

func();