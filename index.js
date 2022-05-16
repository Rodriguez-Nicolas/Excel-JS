// Import stylesheets
import './style.css';

//defino la clase casa
class Casa {
  constructor(direccion, localidad, ambientes, antiguedad, descripcion) {
    direccion = direccion;
    localidad = localidad;
    ambientes = ambientes;
    antiguedad = antiguedad;
    descripcion = descripcion;
  }
}

//declaro 4 casas harcodeadas
const casa1 = new Casa();
casa1.direccion = 'La tablada 123';
casa1.localidad = 'Cordoba';
casa1.ambientes = 4;
casa1.antiguedad = 10;
casa1.descripcion = 'Amarilla techo de tejas';

const casa2 = new Casa();
casa2.direccion = 'Puerredon 123';
casa2.localidad = 'Cordoba';
casa2.ambientes = 3;
casa2.antiguedad = 5;
casa2.descripcion = 'Blanca techo de chapa';

const casa3 = new Casa();
casa3.direccion = '9 de Julio 20';
casa3.localidad = 'La Cumbre';
casa3.ambientes = 6;
casa3.antiguedad = 50;
casa3.descripcion = 'Estilo colonial';

const casa4 = new Casa();
casa4.direccion = 'Alvear 123';
casa4.localidad = 'Cordoba';
casa4.ambientes = 2;
casa4.antiguedad = 10;
casa4.descripcion = 'Departamento bien iluminado';

var casas = [casa1, casa2, casa3, casa4];
//console.log(casas);

//defino la clase auto
class Auto {
  constructor(dominio, modelo, marca) {
    dominio = dominio;
    modelo = modelo;
    marca = marca;
  }
}
//declaro 3 autos harcodeados
const auto1 = new Auto();
auto1.dominio = 'ASD123';
auto1.modelo = 'Corsa';
auto1.marca = 'Chevrolet';

const auto2 = new Auto();
auto2.dominio = 'EWQ456';
auto2.modelo = 'Laguna';
auto2.marca = 'Renault';

const auto3 = new Auto();
auto3.dominio = 'XCV789';
auto3.modelo = 'F100';
auto3.marca = 'Ford';

var autos = [auto1, auto2, auto3];
console.log(autos.length);

//funcion que se encarga de mostrar cualquier objeto en una lista

function dibujarTabla(listaEntrada, divSalida) {
  var atributos = Object.keys(listaEntrada[0]);
  var encabezados = document.createElement('UL');
  for (var i in listaEntrada) {
    var objeto = Object.values(listaEntrada[i]);
    var fila = document.createElement('UL');
    for (var j in atributos) {
      if (i == 0) {
        var b = atributos[j];
        var encabezado = document.createElement('LI');
        encabezado.appendChild(document.createTextNode(b));
        encabezados.appendChild(encabezado);
      }
      var c = objeto[j];
      var dato = document.createElement('LI');
      dato.appendChild(document.createTextNode(c));
      fila.appendChild(dato);
    }
    if (i == 0) {
      divSalida.appendChild(encabezados);
    }
    divSalida.appendChild(fila);
  }
}

function dibujarLabel(listaEntrada, labelSalida) {
  for (var i in listaEntrada) {
    var valor = listaEntrada[i];
    var opcion = document.createElement('OPTION');
    opcion.value = valor;
    opcion.textContent = valor;
    labelSalida.appendChild(opcion);
  }
}
function ordenar(listaEntrada, atributo) {
  listaOrdenada = listaEntrada;
  for (var i = 0; i < lista.length - 1; i++) {
    if (lista[i].atributo > lista[i + 1].atributo) {
      var auxiliar = lista[i];
      lista[i] = lista[i + 1];
      lista[i + 1] = auxiliar;
    }
  }
  return listaOrdenada;
}
/*
for(j=0; j < n-1; j++){          T(n)
  if(vec[j] > vec[j+1]){         T(1)
    aux=vec[j];                  T(1)
    vec[j]=vec[j+1];             T(1)
    vec[j+1]=aux;}               T(1)
 } }
*/
var atributos = Object.keys(casa1);
var labelSalida = document.getElementById('ordenarPor');
var div = document.getElementById('tabla');

dibujarLabel(atributos, labelSalida);
dibujarTabla(autos, div);
