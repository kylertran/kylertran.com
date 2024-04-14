"use strict";
let models;

fetch('./js/models.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(data => {
        models = data;

        let mainDIV = document.body;
        let viewers = [];

        models.forEach((model, i) => {
            let bgcolor = i % 2 === 1 ? "lightgray" : "gray";

            // create and configure the model container
            let modelDiv = document.createElement("div");
            modelDiv.className = "model";
            modelDiv.id = "model" + i;
            modelDiv.style.backgroundColor = bgcolor;
            //modelDiv.style.border = "none";

            // create and configure the STL container
            let stlContDiv = document.createElement("div");
            stlContDiv.id = model.cont;
            stlContDiv.className = "stl_cont";

            // create and configure the text elements
            let titleH3 = document.createElement("h3");
            titleH3.textContent = model.name;

            let aboutP = document.createElement("p");
            aboutP.textContent = model.description;

            // create and configure the download button
            let downloadButton = document.createElement("button");
            downloadButton.className = "download";
            downloadButton.textContent = "Download STL";
            downloadButton.addEventListener('click', () => {
                // use the StlViewer's download_model method to download the model
                viewers[i].download_model(i, model.name + '.stl');
            });

            // assemble the model div
            modelDiv.innerHTML = '<div class="model_cont"></div><div class="text"><div class="title"></div><div class="about"></div><div class="button_cont"></div></div>';
            modelDiv.querySelector(".model_cont").appendChild(stlContDiv);
            modelDiv.querySelector(".title").appendChild(titleH3);
            modelDiv.querySelector(".about").appendChild(aboutP);
            modelDiv.querySelector(".button_cont").appendChild(downloadButton);

            // append the model div to the main div
            mainDIV.appendChild(modelDiv);

            // initialize the STL viewers
            viewers[i] = new StlViewer(document.getElementById(model.cont), {
                auto_rotate: true,
                models: [{ id: i, filename: model.url }],
            });
        });
    })
    .catch(function () {
        console.log("Fetch error occurred.");
    });
