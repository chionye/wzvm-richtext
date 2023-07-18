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

export const insertLink = (src: string, selectedText:Selection) => {
    const a = document.createElement('a');
    a.href = src;
    a.target = '_blank';
    a.title = src;
    selectedText.getRangeAt(0).surroundContents(a);
}