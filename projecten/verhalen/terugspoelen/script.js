/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

document.addEventListener("DOMContentLoaded", function (e) {
    document.body.classList.remove('fade');
});

window.onscroll = function () {
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

    //  console.log('offset = ' + offset);
    //  console.log('height = ' + height);

    if (offset === height) {
        console.log('At the bottom');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
};
