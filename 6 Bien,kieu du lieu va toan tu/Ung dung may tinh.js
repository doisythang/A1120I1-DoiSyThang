function cong() {
    var a,b,c;
    a = parseInt(document.getElementById("sodangtruoc").value);
    b = parseInt(document.getElementById("sodangsau").value);
c = a +b;
document.getElementById("cong").innerText=c;
}
function tru() {
    var a,b,c;
    a = parseInt(document.getElementById("sodangtruoc").value);
    b = parseInt(document.getElementById("sodangsau").value);
    c = a - b;
    document.getElementById("tru").innerText=c;
}
function nhan() {
    var a,b,c;
    a = parseInt(document.getElementById("sodangtruoc").value);
    b = parseInt(document.getElementById("sodangsau").value);
    c = a*b;
    document.getElementById("nhan").innerText=c;
}
function chia() {
    var a,b,c;
    a = parseInt(document.getElementById("sodangtruoc").value);
    b = parseInt(document.getElementById("sodangsau").value);
    c = a/b;
    document.getElementById("chia").innerText=c;
}