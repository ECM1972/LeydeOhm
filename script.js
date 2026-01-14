const V = document.getElementById("voltaje");
const R = document.getElementById("resistencia");

const vValor = document.getElementById("vValor");
const rValor = document.getElementById("rValor");
const iValor = document.getElementById("iValor");

const canvas = document.getElementById("grafica");
const ctx = canvas.getContext("2d");

V.value = 12;
R.value = 10;

function actualizar() {
    const volt = parseFloat(V.value);
    const res = parseFloat(R.value);
    const inten = volt / res;

    vValor.textContent = volt + " V";
    rValor.textContent = res + " Ω";
    iValor.textContent = inten.toFixed(2) + " A";

    dibujarGrafica();
}

function dibujarGrafica() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(40, 200);
    ctx.lineTo(40, 20);
    ctx.lineTo(480, 200);
    ctx.stroke();

    ctx.fillText("I (A)", 5, 20);
    ctx.fillText("V (V)", 450, 230);

    ctx.strokeStyle = "#2196F3";
    ctx.beginPath();

    for (let v = 0; v <= 24; v++) {
        const i = v / R.value;
        const x = 40 + (v / 24) * 420;
        const y = 200 - (i / 5) * 160;

        if (v === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
}

V.addEventListener("input", actualizar);
R.addEventListener("input", actualizar);

actualizar();

