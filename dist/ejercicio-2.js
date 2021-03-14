function meshArray(cadena) {
    for (let iter = 0; iter < cadena.length - 1; iter++) {
        let num = cadena[iter + 1].indexOf(cadena[iter].
            charAt(cadena[iter].length - 1));
        console.log(num);
        let cad1 = cadena[iter].length - 1;
        for (let i = num; i >= 0; i--) {
            console.log("Compara " + cadena[0].charAt(cad1) +
                " con " + cadena[1].charAt(i));
            if (cadena[iter].charAt(cad1) === cadena[iter + 1].charAt(i)) {
                console.log("Crack");
                cad1--;
            }
            else {
                return "PUTO";
            }
        }
    }
    return "Error al encadenar";
}
let entrada = ["allow", "lowering", "ringmaster", "terror"];
console.log(meshArray(entrada));
