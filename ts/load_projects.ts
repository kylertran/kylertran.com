interface Project {
    id: string;
    name: string;
    description: string;
    images?: string[];
    video?: string;
    link?: {
        text: string;
        url: string;
    };
}

let projects: Project[] = [];

fetch('./js/projects.json')
    .then((response: Response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
    })
    .then((data: Project[]) => {
        projects = data;
        const mainDIV: HTMLElement = document.body;

        projects.forEach((project: Project, i: number) => {
            const bgcolor: string = i % 2 === 1 ? "lightgray" : "gray";
            const projectDiv: HTMLDivElement = document.createElement("div");
            projectDiv.className = "project";
            projectDiv.id = project.id;
            projectDiv.style.backgroundColor = bgcolor;
            if(i === 0) projectDiv.style.borderTop = "0";

            // Media section
            if (project.images?.length) {
                const slideshowDiv: HTMLDivElement = document.createElement("div");
                slideshowDiv.className = "slideshow";

                project.images.forEach((imageSrc: string) => {
                    const img: HTMLImageElement = document.createElement("img");
                    img.src = imageSrc;
                    img.className = `${project.id}-photos`;
                    slideshowDiv.appendChild(img);
                });

                projectDiv.appendChild(slideshowDiv);
            }

            if (project.video) {
                const videoDiv: HTMLDivElement = document.createElement("div");
                videoDiv.className = "video";
                
                const iframe: HTMLIFrameElement = document.createElement("iframe");
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
            const projectInfoDiv: HTMLDivElement = document.createElement("div");
            projectInfoDiv.className = "project-info";

            const titleDiv: HTMLDivElement = document.createElement("div");
            titleDiv.className = "title";
            const titleH3: HTMLHeadingElement = document.createElement("h3");
            titleH3.textContent = project.name;
            titleDiv.appendChild(titleH3);

            const aboutDiv: HTMLDivElement = document.createElement("div");
            aboutDiv.className = "about";
            const aboutP: HTMLParagraphElement = document.createElement("p");
            aboutP.textContent = project.description;
            aboutDiv.appendChild(aboutP);

            if (project.link) {
                const br: HTMLBRElement = document.createElement("br");
                aboutDiv.appendChild(br);
                
                const button: HTMLButtonElement = document.createElement("button");
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
    .catch((error: Error) => console.error("Fetch error:", error.message));