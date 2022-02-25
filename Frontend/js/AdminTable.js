$(document).ready(function() {
    let table = new DataTable('#table_id', {
         "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Delete</button>"
        },
        {
            "targets": -2,
            "data": null,
            "defaultContent": "<input type='checkbox' checked data-toggle='toggle'>Enable</input>"
        }
        ]
    } );
 
    $('#table_id tbody').on( 'click', 'button', function () {
        table
        .row( $(this).parents('tr') )
        .remove()
        .draw();
    } );

    $('#addRow').on('click', function(){
        let product = document.getElementById("product").value;
        let company = document.getElementById("company").value;
        let units = document.getElementById("units").value;
        let price = document.getElementById("price").value;
    
        table.row.add([product,company, units, price]).draw();
    });
} );

function addRowToTable(){
    let product = document.getElementById("product").value;
    let company = document.getElementById("company").value;
    let units = document.getElementById("units").value;
    let price = document.getElementById("price").value;
    table.row.add([product,company, units, price]).draw();

}
