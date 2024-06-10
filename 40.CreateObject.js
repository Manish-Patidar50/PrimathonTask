
function mobile(Company, Price, model){

    this.Company = Company;
    this.Price  = Price;
    this.model = model;
}

let iphone = new mobile('i13- pro', 75000, '2023');

console.log(iphone.Company);
console.log(iphone.Price);
console.log(iphone['model']);