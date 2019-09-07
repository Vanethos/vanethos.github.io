(function() {
    setBioEventListener();
})();
/* Bio Toggles */

function setBioEventListener() {
    console.log("Hello world!");
    Array.from(document.getElementsByClassName('header-hyperlinks')).forEach(e => {
        console.log(e.classList);
        e.addEventListener('click', bioToggle);
    });
}

function bioToggle(e) {
    console.log(e.target);
    let bioType = e.target;
    off();
    console.log(document.getElementsByClassName(bioType.id));
    Array.from(document.getElementsByClassName((bioType.id))).forEach(e => {
        e.classList.add('show');
    });
}

function off() {
    Array.from(document.getElementsByClassName('bio')).forEach(e => {
        e.classList.remove('show');
    });
}