import { XMLHttpRequest } from "XMLHttpRequest";
var xhr = new XMLHttpRequest();

function request(url, callback) {
    xhr.open("get", url);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            callback(xhr.response);
        }
    };
    xhr.send();
}

function display(data) {
    console.log(data);
}
let url = "https://jsonplaceholder.typicode.com/users/1"
console.log(request(url,display));