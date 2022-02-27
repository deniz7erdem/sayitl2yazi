//para formatı fonksiyonu
Number.prototype.formatMoney = function (fractionDigits, decimal, separator) {
    fractionDigits = isNaN(fractionDigits = Math.abs(fractionDigits)) ? 2 : fractionDigits;

    decimal = typeof (decimal) === undefined ? "." : decimal;

    separator = typeof (separator) === undefined ? "," : separator;

    var number = this;

    var neg = number < 0 ? "-" : "";

    var wholePart = parseInt(number = Math.abs(+number || 0).toFixed(fractionDigits)) + "";

    var separtorIndex = (separtorIndex = wholePart.length) > 3 ? separtorIndex % 3 : 0;

    return neg +

        (separtorIndex ? wholePart.substr(0, separtorIndex) + separator : "") +

        wholePart.substr(separtorIndex).replace(/(\d{3})(?=\d)/g, "$1" + separator) +

        (fractionDigits ? decimal + Math.abs(number - wholePart).toFixed(fractionDigits).slice(2) : "");

};

function formatMoney(raw) {

    return Number(raw).formatMoney(2, ',', '.');

}

//yazıya çevirme
function yaziyla(yazitl) {
    formatMoney(yazitl);
    var sayi = yazitl.split(".");
    var sayisol = sayi[0];
    var sayisag = sayi[1];
    var i9;
    var i8;
    var i7;
    var i6;
    var i5;
    var i4;
    var i3;
    var i2;
    var i1;
    var r2;
    var r1;
    //DOKUZLAR
    if (sayisol.length == 9) {
        i = Math.floor(sayisol / 100000000);
        if (i == 1) { i9 = 'YÜZ' }
        if (i == 2) { i9 = 'IKIYÜZ' }
        if (i == 3) { i9 = 'ÜCYÜZ' }
        if (i == 4) { i9 = 'DÖRTYÜZ' }
        if (i == 5) { i9 = 'BEŞYÜZ' }
        if (i == 6) { i9 = 'ALTIYÜZ' }
        if (i == 7) { i9 = 'YEDIYÜZ' }
        if (i == 8) { i9 = 'SEKIZYÜZ' }
        if (i == 9) { i9 = 'DOKUZYÜZ' }
        if (i == 0) { i9 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i9 = '' }

    //SEKIZLER
    if (sayisol.length == 8) {
        i = Math.floor(sayisol / 10000000);
        if (i == 1) { i8 = 'ON' }
        if (i == 2) { i8 = 'YIRMI' }
        if (i == 3) { i8 = 'OTUZ' }
        if (i == 4) { i8 = 'KIRK' }
        if (i == 5) { i8 = 'ELLI' }
        if (i == 6) { i8 = 'ATMIŞ' }
        if (i == 7) { i8 = 'YETMIŞ' }
        if (i == 8) { i8 = 'SEKSEN' }
        if (i == 9) { i8 = 'DOKSAN' }
        if (i == 0) { i8 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i8 = '' }

    //YEDILER
    if (sayisol.length == 7) {
        i = Math.floor(sayisol / 1000000);
        if (i == 1) {
            if (i !== undefined) {
                i7 = 'BIRMILYON';
            } else { i7 = 'MILYON'; }
        }
        if (i == 2) { i7 = 'IKIMILYON' }
        if (i == 3) { i7 = 'ÜCMILYON' }
        if (i == 4) { i7 = 'DÖRTMILYON' }
        if (i == 5) { i7 = 'BEŞMILYON' }
        if (i == 6) { i7 = 'ALTIMILYON' }
        if (i == 7) { i7 = 'YEDIMILYON' }
        if (i == 8) { i7 = 'SEKIZMILYON' }
        if (i == 9) { i7 = 'DOKUZMILYON' }
        if (i == 0) {
            if (i7 !== undefined) { i7 = 'MILYON' }
            else { i7 = '' }
        }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i7 = '' }

    //ALTILAR
    if (sayisol.length == 6) {
        i = Math.floor(sayisol / 100000);
        if (i == 1) { i6 = 'YÜZ' }
        if (i == 2) { i6 = 'IKIYÜZ' }
        if (i == 3) { i6 = 'ÜCYÜZ' }
        if (i == 4) { i6 = 'DÖRTYÜZ' }
        if (i == 5) { i6 = 'BEŞYÜZ' }
        if (i == 6) { i6 = 'ALTIYÜZ' }
        if (i == 7) { i6 = 'YEDIYÜZ' }
        if (i == 8) { i6 = 'SEKIZYÜZ' }
        if (i == 9) { i6 = 'DOKUZYÜZ' }
        if (i == 0) { i6 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i6 = '' }

    //BEŞLER
    if (sayisol.length == 5) {
        i = Math.floor(sayisol / 10000);
        if (i == 1) { i5 = 'ON' }
        if (i == 2) { i5 = 'YIRMI' }
        if (i == 3) { i5 = 'OTUZ' }
        if (i == 4) { i5 = 'KIRK' }
        if (i == 5) { i5 = 'ELLI' }
        if (i == 6) { i5 = 'ATMIS' }
        if (i == 7) { i5 = 'YETMIS' }
        if (i == 8) { i5 = 'SEKSEN' }
        if (i == 9) { i5 = 'DOKSAN' }
        if (i == 0) { i5 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i5 = '' }

    //DÖRTLER
    if (sayisol.length == 4) {
        i = Math.floor(sayisol / 1000);
        if (i == 1) {
            if (i !== undefined) {
                i4 = 'BIRBIN';
            } else { i4 = 'BIN'; }

        }

        if (i == 2) { i4 = 'IKIBIN' }
        if (i == 3) { i4 = 'ÜCBIN' }
        if (i == 4) { i4 = 'DÖRTBIN' }
        if (i == 5) { i4 = 'BESBIN' }
        if (i == 6) { i4 = 'ALTIBIN' }
        if (i == 7) { i4 = 'YEDIBIN' }
        if (i == 8) { i4 = 'SEKIZBIN' }
        if (i == 9) { i4 = 'DOKUZBIN' }
        if (i == 0) {
            if (i4 !== undefined) { i4 = 'BIN' }
            else { i4 = '' }
        }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i4 = '' }

    //ÜCLER
    if (sayisol.length == 3) {
        i = Math.floor(sayisol / 100);
        if (i == 1) { i3 = 'YÜZ' }
        if (i == 2) { i3 = 'IKIYÜZ' }
        if (i == 3) { i3 = 'ÜCYÜZ' }
        if (i == 4) { i3 = 'DÖRTYÜZ' }
        if (i == 5) { i3 = 'BESYÜZ' }
        if (i == 6) { i3 = 'ALTIYÜZ' }
        if (i == 7) { i3 = 'YEDIYÜZ' }
        if (i == 8) { i3 = 'SEKIZYÜZ' }
        if (i == 9) { i3 = 'DOKUZYÜZ' }
        if (i == 0) { i3 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i3 = '' }

    //IKILERR
    if (sayisol.length == 2) {
        i = Math.floor(sayisol / 10);
        if (i == 1) { i2 = 'ON' }
        if (i == 2) { i2 = 'YIRMI' }
        if (i == 3) { i2 = 'OTUZ' }
        if (i == 4) { i2 = 'KIRK' }
        if (i == 5) { i2 = 'ELLI' }
        if (i == 6) { i2 = 'ATMIS' }
        if (i == 7) { i2 = 'YETMIS' }
        if (i == 8) { i2 = 'SEKSEN' }
        if (i == 9) { i2 = 'DOKSAN' }
        if (i == 0) { i2 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i2 = '' }

    //BIRLER
    if (sayisol.length == 1) {
        i = Math.floor(sayisol / 1);
        if (i == 1) { i1 = 'BIR' }
        if (i == 2) { i1 = 'IKI' }
        if (i == 3) { i1 = 'ÜC' }
        if (i == 4) { i1 = 'DÖRT' }
        if (i == 5) { i1 = 'BES' }
        if (i == 6) { i1 = 'ALTI' }
        if (i == 7) { i1 = 'YEDI' }
        if (i == 8) { i1 = 'SEKIZ' }
        if (i == 9) { i1 = 'DOKUZ' }
        if (i == 0) { i1 = '' }
        sayisol = sayisol.substr(1, sayisol - 1);
    } else { i1 = '' }

    //SAĞ IKI
    if (sayisag !== undefined) {
        if (sayisag.length == 2) {
            i = Math.floor(sayisag / 10);
            if (i == 1) { r2 = 'ON' }
            if (i == 2) { r2 = 'YIRMI' }
            if (i == 3) { r2 = 'OTUZ' }
            if (i == 4) { r2 = 'KIRK' }
            if (i == 5) { r2 = 'ELLI' }
            if (i == 6) { r2 = 'ATMIS' }
            if (i == 7) { r2 = 'YETMIS' }
            if (i == 8) { r2 = 'SEKSEN' }
            if (i == 9) { r2 = 'DOKSAN' }
            if (i == 0) { r2 = '' }
            sayisag = sayisag.substr(1, sayisag - 1);
        }
        //SAĞ BIR
        if (sayisag.length == 1) {
            i = Math.floor(sayisag / 1);
            if (i == 1) { r1 = 'BIR' }
            if (i == 2) { r1 = 'IKI' }
            if (i == 3) { r1 = 'ÜC' }
            if (i == 4) { r1 = 'DÖRT' }
            if (i == 5) { r1 = 'BES' }
            if (i == 6) { r1 = 'ALTI' }
            if (i == 7) { r1 = 'YEDI' }
            if (i == 8) { r1 = 'SEKIZ' }
            if (i == 9) { r1 = 'DOKUZ' }
            if (i == 0) { r1 = '' }
            sayisag = sayisag.substr(1, sayisag - 1);
        }
    } else { r2 = ''; r1 = 'SIFIR'; }
    document.getElementById("sayi").innerHTML=i9 + i8 + i7 + i6 + i5 + i4 + i3 + i2 + i1 + ' TÜRK LIRASI ' + r2 + r1 + ' KURUS';
    //alert(i9 + i8 + i7 + i6 + i5 + i4 + i3 + i2 + i1 + ' TÜRK LIRASI ' + r2 + r1 + ' KURUS');

}