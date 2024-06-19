
function getFileExtension(filename){

    const extension = filename.split('.').pop();
    return extension;
}

const res1 = getFileExtension('module.txt');
console.log(res1);