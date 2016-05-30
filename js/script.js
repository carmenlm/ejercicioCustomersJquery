/**
 * Created by Carmen on 30/05/2016.
 */

$(document).ready(function () {

    $("#btnConsultarClientes").click(function (event) {

        console.log('arranco');

        //muestro la tabla
        $("#tabla").show();

        //peticion ajax jquery
        $.ajax({
            //url con los datos json
            url: "js/customers.json",
            //funcion si hay error
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },
            //tipo de datos
            dataType: 'json',
            //funcion si hay exit
            success: function (data, response) {
                console.log('exito');
                //llamo al callback
                myCallBackDeCustomers(data);

            },
            //tipo de peticion
            type: 'GET'
        });
    });


});
