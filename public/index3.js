
$(document).ready(function() {
  
    $('#primetable').DataTable( {
        processing: true,
        serverSide: true,
        ajax:{url:"http://localhost:3000/usacek",dataSrc:""},
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: "GET",
        columns: [
           
            { data: "kdo" },
            { data: "datum" },
            { data: "pozn1" },
            { data: "pozn2" },
           
        ]
    } );
} );
    