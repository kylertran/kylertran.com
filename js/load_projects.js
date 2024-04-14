"use strict";

import data from './projects.json' assert {type: 'json'};

let projects = data;

for(let i = 0; i < projects.length; i++){
    let mainDIV = document.body;

    let container = projects[i].cont;
    let id = projects[i].id;
    let name = projects[i].name;
    let description = projects[i].description;
    
    let bgcolor = "gray";
    if(i % 2 == 1){
        bgcolor = "lightgray";
    }
    
    mainDIV.innerHTML += "<div id=\""+ id +"\" class=\"project\"><div class =\"project-info\"><div class=\"title\"><h3>"+ name +"</h3></div><div class=\"about\"><p>"+ description +"</p></div></div></div>";
    
    /*if(projects[i].images != null){
        mainDIV.innerHTML += "<div class=\"slideshow\">";
        for(let j = 0; j < projects[i].images.length; j++){
            mainDIV.innerHTML += "<img src=\""+ projects[i].images[j] +"\"></img>"
        }
    }
    mainDIV.innerHTML += "</div>";*/
    
    //mainDIV.innerHTML += "<div class =\"project-info\"><div class=\"title\"><h3>"+ name +"</h3></div><div class=\"about\"><p>"+ description +"</p></div></div></div>";
}