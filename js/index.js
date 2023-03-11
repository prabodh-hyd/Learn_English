const btn = document.querySelector('button');
const url = 'textFiles/data.txt';
const text1 = 'textFiles/data2.txt';
const text2 = 'textFiles/data2.txt';
const text3 = 'textFiles/data3.txt';
const text4 = 'textFiles/data4.txt';

const textRes = [url, text1, text2, text3, text4];


function clickBtn(value, object) {
    reqDate(value);
}

//Displaying the text file
function output(date) {
    console.log(date);
    document.getElementById("demo").innerHTML = this.responseText;
}

function reqDate(fileValue) {

    const userReturn = (val) => {
        for (let i = 0; i < textRes.length; i++) {
            if (val == textRes[i]) {
                console.log("Text File");
                return textRes[i];
            }
        }
    }

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output);
    xhr.open('GET', userReturn(fileValue));
    xhr.send();
    console.log(xhr);
}


document.getElementById('infl').addEventListener('change',function(){
    var file_reader=new FileReader();
    file_reader.onload=function(){
        document.getElementById('res').textContent=file_reader.result;
        console.log("desuRota;");
    }
    file_reader.readAsText(this.files[0]);
})