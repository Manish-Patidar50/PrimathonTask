
let x1 = new Date();
let x2 = new Date();

if(x1.getTime() < x2.getTime())
    console.log("x1 is lesser than x2");
else if (x1.getTime() > x2.getTime())
     console.log("x1 is greater than x2");

else
 console.log("both are equal");