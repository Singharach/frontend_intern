let pagesIndex = 1;
showPages(pagesIndex);

function currentPages(n) {
    showPages(pagesIndex = n);
}

function showPages(n) {
    let i;
    let pages = document.getElementsByClassName("news");
    let buttons = document.getElementsByClassName("acm");
    if (n > pages.length) { pagesIndex = 1 }
    if (n < 1) { pagesIndex = pages.length }
    for (i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" activeB", "");
    }
    pages[pagesIndex - 1].style.display = "flex";
    buttons[pagesIndex - 1].className += " activeB";
}