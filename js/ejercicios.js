let pantalla = document.getElementById('resultado');

//1

function calculadoraDeEdad(fecha) {
    const vectorFecha = (fecha.split("-"));
    console.log(vectorFecha);
    let anio = conseguirAnioActual() - vectorFecha[0];
    let mes = conseguirMesActual() - vectorFecha[1];
    let dia = conseguirDiaActual() - vectorFecha[2];
    if (dia < 0) {
        mes--;
        const mesAnterior = new Date(conseguirAnioActual(), conseguirMesActual(), 0);
        dia += mesAnterior.getDate();

    }
    if (mes < 0) {
        anio--;
        mes += 12;
    }

    console.log(anio);
    console.log(mes);
    console.log(dia);
    let nombre = getElementById("nombre");
    console.log(`Hola ${nombre}, tenés ${anio} años.`);
    pantalla.innerText = `Hola ${nombre}, tenés ${anio} años.`
}

//2

const frutas = ["banana", "naranja", "limón", "manzana", "mango","uva","tomate","kiwi","mandarina","pepino"];
console.log("Lista de frutas disponibles:");
frutas.forEach(fruta => {
  console.log(fruta);
});
    function buscarFruta() {
      const frutaBuscada = document.getElementById('fruta-input').value.toLowerCase();
      const resultado = document.getElementById('resultado');

      if (frutas.includes(frutaBuscada)) {
        resultado.textContent = `¡Sí, tenemos ${frutaBuscada}!`;
      } else {    
        resultado.textContent = `No, no tenemos ${frutaBuscada}.`;
      }
    }

//3



    const numeros = [1,2,3,4,5,6,7,8,9,10];
    consolo.log(numeros);


function duplicarNumeros(){
      const NumerosDuplicados = numeros.map(numero => numero*2);
      console.log(NumerosDuplicados);
    }    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    