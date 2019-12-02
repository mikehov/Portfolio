/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/


// Bolletje veranderd van kleur door het klikken
function willekeurigeKleurLichaam() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var kleurLichaam = 'rgb(' + x + ',' + y + ',' + z + ')';
    document.getElementsByClassName('bolletje')[0].style.background = kleurLichaam;
    document.getElementsByClassName('vierkantje')[0].style.background = kleurLichaam;
    document.getElementsByClassName('driehoekje')[0].style.borderBottomColor = kleurLichaam;
    console.log('Ik ben veranderd in een andere kleur namelijk ' + kleurLichaam + '.');
}

document.getElementsByClassName('bolletje')[0].addEventListener('click', willekeurigeKleurLichaam);
document.getElementsByClassName('vierkantje')[0].addEventListener('click', willekeurigeKleurLichaam);
document.getElementsByClassName('driehoekje')[0].addEventListener('click', willekeurigeKleurLichaam);



// Bolletje verander van vorm door op één van de knoppen te klikken
function bolletje() {
    document.getElementsByClassName('bolletje')[0].style.display = 'block';
    document.getElementsByClassName('vierkantje')[0].style.display = 'none';
    document.getElementsByClassName('driehoekje')[0].style.display = 'none';
    console.log('Ik ben nu een bolletje.');
}

function vierkantje() {
    document.getElementsByClassName('bolletje')[0].style.display = 'none';
    document.getElementsByClassName('vierkantje')[0].style.display = 'block';
    document.getElementsByClassName('driehoekje')[0].style.display = 'none';
    console.log('Ik ben nu een vierkant.');
}

function driehoekje() {
    document.getElementsByClassName('bolletje')[0].style.display = 'none';
    document.getElementsByClassName('vierkantje')[0].style.display = 'none';
    document.getElementsByClassName('driehoekje')[0].style.display = 'block';
    console.log('Ik ben nu een driehoek.');
}

document.getElementById('bolletje').addEventListener('click', bolletje);
document.getElementById('vierkantje').addEventListener('click', vierkantje);
document.getElementById('driehoekje').addEventListener('click', driehoekje);



// Achtergrond afbeelding veranderd wanneer je over de knop hoverd
var bgImg = ['achtergrond1.png', 'achtergrond2.png', 'achtergrond3.png'];

var x = 0;
function veranderAchtergrond() {
    if (x <= bgImg.length - 1) {
        document.querySelector('body').style.backgroundImage = 'url(./img/' + bgImg[x];
        console.log(x);
        x++;
    } else {
        x = 0;
        document.querySelector('body').style.backgroundImage = 'url(./img/' + bgImg[x];
    }
}
document.getElementById('achtergrondknop').addEventListener('mouseover', veranderAchtergrond);



// Ogen veranderen als je op het oogje klikt
var ogenImg = ['cuteogen.png', 'cuteogen2.png', 'cuteogen3.png'];

var o = 0;
function veranderOgen() {
    if (o <= ogenImg.length - 1) {
        document.getElementsByClassName('linker-oog')[0].src = 'img/' + ogenImg[o];
        console.log(o);
        o++;
    } else {
        o = 0;
       document.getElementsByClassName('linker-oog')[0].src = 'img/' + ogenImg[x];
    }
}
document.getElementById('ogen1').addEventListener('click', veranderOgen);



// De loop
var deTeller;

function loop() {
    var tekst = "";
    for (deTeller = 20; deTeller >= 0; deTeller = deTeller - 2.5) {
//        console.log('de waarde van teller is: ' + deTeller);
        document.getElementById('loop').textContent = tekst += + deTeller + " ";
    }
}
loop();



// Hoeveel jaren het beestje nog te leven heeft wordt uitgerekend. 
function berekenLeeftijd(gewicht, lang, breed) {
    var totalejaren = 100;
    var leeftijd = gewicht + lang + breed / 2;
    var levensjaren = totalejaren - leeftijd;
    
    var bijElkaar = [leeftijd, levensjaren];
    
    return bijElkaar;
}

document.getElementById('leeftijd').textContent = berekenLeeftijd(32, 10, 10);
