"use strict";
let projects = [];
fetch('./js/projects.json')
    .then((response) => {
    if (!response.ok)
        throw new Error(`HTTP error ${response.status}`);
    return response.json();
})
    .then((data) => {
    projects = data;
    const mainDIV = document.body;
    projects.forEach((project, i) => {
        const bgcolor = i % 2 === 1 ? "lightgray" : "gray";
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.id = project.id;
        projectDiv.style.backgroundColor = bgcolor;
        if (i === 0)
            projectDiv.style.borderTop = "0";
        // Media section
        if (project.images?.length) {
            const slideshowDiv = document.createElement("div");
            slideshowDiv.className = "slideshow";
            project.images.forEach((imageSrc) => {
                const img = document.createElement("img");
                img.src = imageSrc;
                img.className = `${project.id}-photos`;
                slideshowDiv.appendChild(img);
            });
            projectDiv.appendChild(slideshowDiv);
        }
        if (project.video) {
            const videoDiv = document.createElement("div");
            videoDiv.className = "video";
            const iframe = document.createElement("iframe");
            iframe.width = "560";
            iframe.height = "315";
            iframe.src = project.video;
            iframe.title = "YouTube video player";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            videoDiv.appendChild(iframe);
            projectDiv.appendChild(videoDiv);
        }
        // Info section
        const projectInfoDiv = document.createElement("div");
        projectInfoDiv.className = "project-info";
        const titleDiv = document.createElement("div");
        titleDiv.className = "title";
        const titleH3 = document.createElement("h3");
        titleH3.textContent = project.name;
        titleDiv.appendChild(titleH3);
        const aboutDiv = document.createElement("div");
        aboutDiv.className = "about";
        const aboutP = document.createElement("p");
        aboutP.textContent = project.description;
        aboutDiv.appendChild(aboutP);
        if (project.link) {
            const br = document.createElement("br");
            aboutDiv.appendChild(br);
            const button = document.createElement("button");
            button.className = "hyperlink";
            button.textContent = project.link.text;
            button.onclick = () => project.link?.url && window.open(project.link.url);
            aboutDiv.appendChild(button);
        }
        projectInfoDiv.appendChild(titleDiv);
        projectInfoDiv.appendChild(aboutDiv);
        projectDiv.appendChild(projectInfoDiv);
        mainDIV.appendChild(projectDiv);
    });
})
    .catch((error) => console.error("Fetch error:", error.message));
