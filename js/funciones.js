/**
 * Created by Carmen on 30/05/2016.
 */

// Funcion de callback que recibe un array de objetos tipo Customer
function myCallBackDeCustomers(customersJSON) {

    // iteramos por el array de clientes
    for (var i = 0, max = customersJSON.length; i < max; i++) {

        // devuelve en filaACrear una fila html ( recibe un objeto )
        var filaACrear = SC.createRow(customersJSON[i]);

        // inserta la fila en la tabla ( div con id=filas )
        SC.insertRow(filaACrear);
    }


};

