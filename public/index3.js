

// $(document).ready(function() {
     
    
//     $('#primetable').DataTable( {
//         filter: true,
//        order: [1,'asc'],
//         processing: true,
//         serverSide: false,
//         ajax:{url:"http://localhost:3000/usacek",dataSrc:""},
//         dataType: 'json',
//         contentType: 'application/json; charset=utf-8',
//         type: "GET",
//         columns: [
           
//             { data: "kdo" ,
//              render: function (val,type,row){
//                  return val==1 ?"Janik":"Dalibor"
                 
//              }},
//             { data: "datum",
//                 "render": function (val, type, row) {
//                     return moment(val).format('DD.MM.YYYY')
//                 }},
//             { data: "pozn1" , name :"Janik pozn"},
//             { data: "pozn2" , name : "Dalibor pozn"},
           
//         ],   
       
//     } );
    var editor; // use a global for the submit and return data rendering in the examples
 
    $(document).ready(function() {
        editor = new $.fn.dataTable.Editor( {
            ajax: {
                create: {
                    type: 'POST',
                    url:  'http://localhost:3000/usacek'
                },
                edit: {
                    type: 'PUT',
                    url:  'http://localhost:3000/usacek/_id_'
                },
                remove: {
                    type: 'DELETE',
                    url:  'http://localhost:3000/usacek/_id_'
                }
            },
            table: "#primetable",
            idSrc: 'id',
            fields: [ {
                    label: "Kdo",
                    name: "kdo"
                }, {
                    label: "Datum",
                    name: "datum",
                    
                }, {
                    label: "Poznámka Janík:",
                    name: "pozn1"
                }, {
                    label: "Poznámka Dalibor:",
                    name: "pozn2"
                }
            ]
        } );
     
        $('#primetable').DataTable( {
            dom: 'Bfrtip',
            filter: true,
            order: [1,'asc'],
            processing: true,
            serverSide: false,
            ajax:{url:"http://localhost:3000/usacek",dataSrc:""},
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            type: "GET",
            columns: [
                {  data: "kdo",
                render: function (val,type,row)
                    {return val==1 ?"Janik":"Dalibor" }},
                { data: "datum",
                 render: function (val, type, row)
                    {return moment(val).format('DD.MM.YYYY')}},
                { data: "pozn1" },
                { data: "pozn2" },
             
            ],
            select: true,
            buttons: [
                { extend: "create", editor: editor },
                { extend: "edit",   editor: editor },
                { extend: "remove", editor: editor }
            ]
        } );
    } );
  

    
