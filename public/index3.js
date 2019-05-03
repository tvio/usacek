
    $(document).ready(function() {
        
            var table = $('#primetable').DataTable( {
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
            select: true           
        } );
 
 
        $('#primetable tbody').on( 'click', 'tr', function () {
   console.log( table.row( this ).data() );
            data = table.row( this ).data();
   for (var i in data) {
       console.log(data[i]+','+i);
       if (i=="datum")  {
           console.log("dostanu se na datum")
        $('input[id="datum"]').val(moment(data[i]).format('DD.MM.YYYY'));
       } else if
        (i=="kdo") {
            $('input[id="kdo"]').val(data[i]==1 ?"Janik":"Dalibor");
        }
           else
    $('textarea[id="'+i+'"]').val(data[i]);
   }
    
      

    $('#modal').modal('show'); 
     });

    
     
    });
 
          

         

    
