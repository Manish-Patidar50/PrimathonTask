
function geeks_inner(value){
    return  'Hello Team.!!';

}

function geeks_outer(func){

    console.log(geeks_inner());
}

geeks_outer(geeks_inner);