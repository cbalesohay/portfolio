const introText = "My name is Chris, welcome to my portfolio website for CS210";
let index = 0;

function typeIntroText() {
    const target = document.getElementById('typeIntro');

    if (index < introText.length) {
        target.textContent += introText.charAt(index);
        index++;
        setTimeout(typeIntroText, 60);
    } else {
        setTimeout(() => {
            target.textContent = '';
            index = 0;
            typeIntroText();
        }, 2500);
    }
}

typeIntroText();