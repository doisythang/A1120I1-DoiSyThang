function take() {
    var a, b, c, doi;

    a = parseInt(document.getElementById("amount").value);
    b = parseInt(document.getElementById("vietnam").value);
    c = parseInt(document.getElementById("american").value);
    if (b === 0 && c === 0) {
        doi = a / 23000;
    }
    if (b == 1 && c == 0) {
        doi = a * 1
    }
    if (b == 0 && c == 1) {
        doi = a * 1
    }
    if (b == 1 && c == 1) {
        doi = a * 23000
    }
    document.getElementById("change").innerText = doi;
}