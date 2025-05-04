"use strict";
let models = [];
const viewers = [];
fetch('./js/models.json')
    .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
})
    .then((data) => {
    models = data;
    const mainDIV = document.body;
    models.forEach((model, i) => {
        const bgcolor = i % 2 === 1 ? "lightgray" : "gray";
        // Create and configure the model container
        const modelDiv = document.createElement("div");
        modelDiv.className = "model";
        modelDiv.id = `model${i}`;
        modelDiv.style.backgroundColor = bgcolor;
        // Create and configure the STL container
        const stlContDiv = document.createElement("div");
        stlContDiv.id = model.cont;
        stlContDiv.className = "stl_cont";
        // Create basic structure
        modelDiv.innerHTML = `
                <div class="model_cont"></div>
                <div class="text">
                    <div class="title"></div>
                    <div class="about"></div>
                    <div class="button_cont"></div>
                </div>
            `;
        // Create and configure the text elements
        const titleH3 = document.createElement("h3");
        titleH3.textContent = model.name;
        const aboutP = document.createElement("p");
        aboutP.textContent = model.description;
        // Create and configure the download button
        const downloadButton = document.createElement("button");
        downloadButton.className = "download";
        downloadButton.textContent = "Download STL";
        downloadButton.addEventListener('click', () => {
            viewers[i]?.download_model(i, `${model.name}.stl`);
        });
        // Get container elements
        const modelCont = modelDiv.querySelector(".model_cont");
        const titleCont = modelDiv.querySelector(".title");
        const aboutCont = modelDiv.querySelector(".about");
        const buttonCont = modelDiv.querySelector(".button_cont");
        // Safely append elements
        if (modelCont)
            modelCont.appendChild(stlContDiv);
        if (titleCont)
            titleCont.appendChild(titleH3);
        if (aboutCont)
            aboutCont.appendChild(aboutP);
        if (buttonCont)
            buttonCont.appendChild(downloadButton);
        // Append the model div to the main div
        mainDIV.appendChild(modelDiv);
        // Initialize the STL viewer
        const stlContainer = document.getElementById(model.cont);
        if (stlContainer) {
            viewers[i] = new StlViewer(stlContainer, {
                auto_rotate: true,
                models: [{ id: i, filename: model.url }]
            });
        }
    });
})
    .catch((error) => {
    console.error("Fetch error occurred:", error.message);
});
