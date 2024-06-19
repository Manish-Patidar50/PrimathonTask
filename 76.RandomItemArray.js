
function getRandomElementWithReduce(array){

    return array.reduce((selected, item) => {
        return Math.random() < 1 / (array.length) ? item : selected;
    }, array[0]);
}

const sampleArray = [100,200,300,400,500];

const randomItemWithReduce = getRandomElementWithReduce(sampleArray);

console.log(randomItemWithReduce);