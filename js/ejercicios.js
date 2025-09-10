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
    const nombre = document.getElementById("nombre").value;
    console.log(nombre);
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

function ejercicio3() {
    if (10 == '10') {
      console.log("Hola1");
    }
    else {
      console.log("Chau1");
    }
    
    //En éste último se puede ver que se comprueba si los dos números son iguales sin darle importancia alguna a que sean de distintos tipos de datos.
    
    if (10 === '10') {
      console.log("Hola2");
    }
    else {
      console.log("Chau2");
    }
    
    //En éste se ve como el resultado es falso por que los dos valores no son del mismo tipo de dato.
    
    const numero = 10.6;

    console.log(typeof numero); 
    //Es tipo "number" como todos los números con o sin decimales.

    if (true == 1) {
      console.log("Hola3");
    }
    else {
      console.log("Chau3");
    }

    //true y 1 son iguales ya que al no comparar el tipo de dato, como true y false están creados en un código binario de 0 y 1 (siendo 1 true y 0 false), serán iguales.

    pantalla.innerText = `10 == '10' y 10 === '10' son distintos porque === compara también que sean del mismo valor además de solo el numero y por esto dos = es verdadero y tres es falso. Los números con decimales serán del tipo de valor number como los no decimales. Como los valores booleanos se basan en 0 y 1, entonces true sera == a uno ya que no se compara el tipo de dato.`
  }

//4
  
  function ejercicio4() {
    const ciudad = {
      nombre: "Dublín",
      fechaFundacion: "Alrededor de 841 d.C.",
      poblacion: 592713,
      extension: "115 km²"
    }

    for (let clave in ciudad) {
      console.log(`Clave: ${clave} - Valor: ${ciudad[clave]}`);
      pantalla.innerText = `Nombre: ${ciudad.nombre}, Fecha de Fundación: ${ciudad.fechaFundacion}, Población: ${ciudad.poblacion}, Extensión: ${ciudad.extension}`
    }

  }

//5

    const numeros = [1,2,3,4,5,6,7,8,9,10];
    consolo.log(numeros);


function duplicarNumeros(){
      const NumerosDuplicados = numeros.map(numero => numero*2);
      console.log(NumerosDuplicados);
    }    
        
//6

function triangulo() {
  
  console.log("Triángulo 1:")
  const simbolo = ["*", "*", "*", "*", "*"];
  const triangulo1 = simbolo.map((simbolo, i) => "*".repeat(i + 1));
  console.log(triangulo1.join("\n"));

  console.log("Triángulo 2:")
  const simbolo2 = ["-", "-", "-", "-", "-"];
  const filas = simbolo2.length;

  const triangulo2 = simbolo2.map((simbolo2, i) => {
    const guiones = "-".repeat(filas - i - 1);
    const asteriscos = "*".repeat(2 * i + 1);
    return guiones + asteriscos + guiones;
  });

  console.log(triangulo2.join("\n"));

  pantalla.innerText = `${triangulo1.join("\n")} \n \n ${triangulo2.join("\n")}`
}


function mostrarNombresConA() {
  
  let entrada = document.getElementById("nombres").value;
  let nombres = entrada.split(",").map(n => n.trim());
  let nombresConA = nombres.filter(n => n.charAt(0).toUpperCase() === "A");
  document.getElementById("resultado").innerHTML = nombresConA.join(", ");
}

  




        
        
        
        
        
        
        
        
        
        
        
        
    