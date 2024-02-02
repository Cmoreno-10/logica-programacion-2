let temperaturaInicial = parseFloat(prompt ("Ingrese la temperatura en grado celsius"));
let temperaturaKelvin = temperaturaInicial + 273.15;
let temperaturaFahrenheit = (temperaturaInicial  * 9/5) + 32;

let regex = /^[0-9]+(\.[0-9]+)?$/;

if  (regex.test(temperaturaInicial)){
    alert("Tu temperatura es: "+ temperaturaKelvin + " °K y "+ temperaturaFahrenheit + " °F");
}
 else
 alert("La temperatura ingresa no es valida");