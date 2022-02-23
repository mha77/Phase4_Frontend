let table = new DataTable('#table_id', {
    // options
});

let rowNode = table
        .row.add( [ 'Bier', 'Gold Ochsen' ] )
        .draw()

function addRowToTable(){
    alert("Clicked")
    let product = document.getElementById("product").value;
    let company = document.getElementById("company").value;

    table.row.add([product,company]).draw();

}