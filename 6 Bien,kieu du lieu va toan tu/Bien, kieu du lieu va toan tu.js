function diemtb() {
    var a, b, c, d;
    a = parseInt(document.getElementById("diemsinh").value);
    b = parseInt(document.getElementById("diemly").value);
    c = parseInt(document.getElementById("diemhoa").value);
    d = (a + b + c) / 3;
    document.getElementById("diemtb").innerText = d;
}

function diemtong3mon() {
    var q, w, e, r;
    q = parseInt(document.getElementById("diemsinh").value);
    w = parseInt(document.getElementById("diemly").value);
    e = parseInt(document.getElementById("diemhoa").value);
    r = q + w + e;
    document.getElementById("diemtong3mon").innerText = r;
}

function chuyendoisangf() {
    var x, y;
    x = parseInt(document.getElementById("nhietdoc").value);
    y = (x * 1.8) + 32;
    document.getElementById("chuyendoisangf").innerText = y;

}

function dientichhinhtron() {
    var k, h;
    k = parseInt(document.getElementById("bankinhhinhtron").value);

    h = k * k * 3.14;
    document.getElementById("dientichhinhtron").innerText = h;
}

function chuvihinhtron() {
    var l, j;
    l = parseInt(document.getElementById("duongkinhhinhtron").value);
    j = l * 3.14;
    document.getElementById("chuvihinhtron").innerText = j;
}