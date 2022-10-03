"use strict";

/* 
function getOne (id){
fetch('https://rich-rose-crocodile-toga.cyclic.app/'+id)
.then(res => res.json())
.then(code => document.body.innerHTML = code[0].code)

}


let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id"); 
getOne(id)
  */

function getOne (id){
    fetch('http://localhost:3000/server/'+id)
    .then(res => res.json())
    .then(datas => display(datas))
}

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id"); 
getOne(id)


fetch('http://localhost:3000')
.then(res => res.json())
.then(datas => display(datas))


function display(datas){
    console.log(datas);
    document.getElementById('cardContainer').innerHTML ='';

    datas.forEach(data => {
        document.getElementById('cardContainer').innerHTML +=
        `<div class="card">
            <img src="${data.picture}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.content}</p>
              <a href="${data.id}" class="btn btn-primary">Lire article</a>
    </div>`
    });
}