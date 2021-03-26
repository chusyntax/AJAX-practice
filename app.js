var btn = document.getElementById('button1');
var output = document.getElementById('text');

btn.addEventListener('click', getData)

function getData(){
//Create XHR Object

    var xhr = new XMLHttpRequest();
    //OPEN -(type,url/filename/async or not)

    xhr.open('GET', "https://api.github.com/users", true)
//New way
    xhr.onload = function(){
        if(this.status == 200){
           var info = JSON.parse(this.responseText)
     
           //First declare the variable
           var jsonOutput = '';

           //Then use a forEach loop since it is a JSON Array

           for ( i = 0; i < 10; i++){
               jsonOutput += '<ul>' +
           '<li> ID:'+info[i].id+ '</li>' +
           '<li> Name:' +info[i].login+ '</li>' +
           '<li> URL:'+info[i].html_url+ '</li>' +
           '<li>'+'<img src="'+info[i].avatar_url+'" width="90" height="90">'+'</li>' +
           '</ul>'
           ;}
output.innerHTML = jsonOutput;
           
    }
    }

    // xhr.onerror = function(){
    //     console.log('error')
    // }

//OPTIONAL - for Loaders

// xhr.onprogress = function(){
//     //used with ReadyState 3
// }

//     //Old Way
// xhr.onreadystatechange = function(){
//     if(this.readyState == 4 && this.status == 200){
//         // Do Work here
//     }
// }



//Sends Request
    xhr.send()
 
}

//HTTP STATUSES
//200: OK
//403: Forbidden
//404: Not Found

//ReadyState Values

//0: request not initialized
//1: server connection established
//2: request recieved
//3: processing request
//4: recieved request