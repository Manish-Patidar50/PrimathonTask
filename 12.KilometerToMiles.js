

function kilometerTomiles(kilometer)
{
    const miles = kilometer * 0.621371; // this is the formula for kilometer to miles
    return miles;
}

const kilometer = 20;
 const miles = kilometerTomiles(kilometer);

 console.log("Kilometer to miles :",miles);