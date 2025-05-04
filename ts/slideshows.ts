interface SlideshowState {
    [key: string]: number;
}

const currentIndices: SlideshowState = {};
const slideshows = document.querySelectorAll('[class$="-photos"]');

slideshows.forEach((slideshow: Element) => {
    const className = slideshow.className;
    currentIndices[className] = 0;

    setInterval(() => {
        const elements = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.opacity = "0";
        }

        currentIndices[className] = (currentIndices[className] + 1) % elements.length;
        elements[currentIndices[className]].style.opacity = "1";
    }, 3000);
});