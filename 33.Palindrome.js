function reverse(str) {
let rev_str = "";

for(let i = str.length - 1; i >=0; i--)
    {
        rev_str += str[i];
    }
    return rev_str;

}

function is_palindrome(str){
reverse_str = reverse(str);

if (reverse_str === str) {

    console.log("Passing string is Palindrome");
}
else{

    console.log("Passing string is not Palindrome");
  }
}

let temp = "racecar";
is_palindrome(temp);

