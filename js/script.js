/**
 * Created by Carmen on 30/05/2016.
 */

$(document).ready(function () {

    $("#btnConsultarClientes").click(function (event) {

        console.log('arranco');

        $("#tabla").show();

        $.ajax({
            url: "js/customers.json",
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },
            dataType: 'json',
            success: function (data, response) {
                console.log('exito');
                myCallBackDeCustomers(data);

            },
            type: 'GET'
        });
    });


});
