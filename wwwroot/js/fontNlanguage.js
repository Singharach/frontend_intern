let currentIndex = 1;
let langIndex = 1;

ChangeCurrent(currentIndex);
Changelang(langIndex);

function currentSelect(n) {
    ChangeCurrent(currentIndex = n);
}

function currentLang(n) {
    Changelang(langIndex = n);
}

function ChangeCurrent(n) {
    let i;
    let fonts = document.getElementsByClassName("fss");
    for (i = 0; i < fonts.length; i++) {
        fonts[i].className = fonts[i].className.replace(" activeC", "");
    } 
    fonts[currentIndex - 1].className += " activeC";
}

function Changelang(n) {
    let i;
    let langs = document.getElementsByClassName("lang-change");
    for (i = 0; i < langs.length; i++) {
        langs[i].className = langs[i].className.replace(" activeL", "");
    }
    langs[langIndex - 1].className += " activeL";
}