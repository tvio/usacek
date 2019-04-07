

$(document).ready(function() {
     
    
    $('#primetable').DataTable( {
        filter: true,
        order: [1,'asc'],
        processing: true,
        serverSide: false,
        ajax:{url:"http://localhost:3000/usacek",dataSrc:""},
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        type: "GET",
        columns: [
           
            { data: "kdo" ,
             render: function (val,type,row){
                 return val==1 ?"Janik":"Dalibor"
                 
             }},
            { data: "datum",
                "render": function (val, type, row) {
                    return moment(val).format('DD.MM.YYYY')
                }},
            { data: "pozn1" , label :"Janik pozn"},
            { data: "pozn2" , label : "Dalibor pozn"},
           
        ],
        fields: [
         
        ]
       
    } );
} );
    
