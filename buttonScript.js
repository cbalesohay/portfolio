//buttonScript.js



const listOfEl = ['hello', 'bye', 'yes', 'no'];

const addParagraph = () => {
    const el = document.createElement('p')
    el.textContent = 'Paragraph';
    document.querySelector('.container').appendChild(el);
}

const removeParagraph = () => {
    const el = document.createElement('p')
    el.textContent = 'Paragraph';
    const len = document.querySelector('.container').children.length
    const child = document.querySelector('.container').children[len - 1];

    document.querySelector('.container').removeChild(child);
}

const displayList = () => {
    for (i = 0; i < listOfEl.length; i++){
        const el = document.createElement('p')
        const text = document.createTextNode(listOfEl[i]);
        el.appendChild(text);
        document.querySelector('.container').appendChild(el);
    }
}