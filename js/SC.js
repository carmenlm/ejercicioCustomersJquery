/**
 * Created by Carmen on 30/05/2016.
 */

// objeto literal SC
var SC = {


    // metodo que crea la fila ( devuelve ) con los datos del cliente
    createRow: function (objPerson) {

        // Variable local
        var i;				// contador for in
        var row = '<tr>';


        // hacemos un recorrido de las propiedades del objeto
        for (i in objPerson) {

            row += '<td> ' + objPerson[i] + ' </td>';
        }

        // cerramos la fila
        row += '</tr>';

        return row;

    },

    // metodo que inserta una fila en la tabla
    insertRow: function (dataRow) {

        // variables locales
        var elementoBodyDeTabla = document.getElementsByTagName('tbody')[0];

        elementoBodyDeTabla.innerHTML += dataRow;


    },

    // metodo que muestra los clientes en la pagina
    //NO ESTA HACIENDO NADA ¿?
    consultarClientes: function (ajaxObjeto) {


        // variable local
        var tabla = '<table class="table table-hover">'
            + '    <thead>'
            + '      <tr>'
            + '       <th>Name </th>'
            + '       <th>City</th>'
            + '       <th>Country</th>'
            + '       </tr>'
            + '   </thead>'
            + '  <tbody></tbody></table>';

        var filas = document.getElementById('filas');


        filas.innerHTML = tabla;


    }


};



