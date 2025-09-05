function pasarFechaAString() {
    let fecha = document.getElementById("fechaNacimiento").value;
    console.log(fecha);
    return fecha;
}
const hoy = new Date();
console.log(hoy);

function conseguirAnioActual() {
    return hoy.getFullYear();
}
function conseguirMesActual() {
    return hoy.getMonth() + 1;
}
function conseguirDiaActual() {
    return hoy.getDate();
}