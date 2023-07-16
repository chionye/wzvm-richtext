export const commandsWithValue = ["H1", "H2", "H3", "H4", "H5", "H6", "CreateLink", "Picture", "Video", "Social"];

export const formatText = (command: string, showUI:boolean, value:string | null) => {
    document.execCommand(command, showUI, value!);
};

export const insertMedia = (src: string, buttonPressed: string, div: Element) => {
    const element = buttonPressed === "Picture" ? "img" : "iframe";
    const child = document.createElement(element);
    child.src = src;
    div.appendChild(child);
}

export const insertLink = (src: string, selectedText:Selection, div: Element) => {
    const element = `<a href='${src}' target="_blank">${selectedText.toString()}</a>`;
    const content = div.innerHTML;
    const start = selectedText.anchorOffset;
    const end = selectedText.toString().length + start;
    const replaceWithLink = replaceText(content, start, end, element);
    div.innerHTML = replaceWithLink
    console.log(content, start, end, element, replaceWithLink)
}

export const replaceText = (origin: string, startIndex: number, endIndex: number, insertion: string)=>{
    return origin.substring(0, startIndex) + insertion + origin.substring(endIndex);
}