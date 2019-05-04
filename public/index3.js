
var dny = ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'];

    $(document).ready(function() {
        
            var table = $('#primetable').DataTable( {
           filter: true,
            order: [0,"desc"],
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
                { data :"datum",
                   render: function (val,typ,row)
                   {   x = moment(val).toDate();
                       return dny[x.getDay()]}},
                { data: "pozn1" },
                { data: "pozn2" },
                
             
            ],
            select: true           
        } );
 
        var id;
        $('#primetable tbody').on( 'click', 'tr', function () {
   console.log( table.row( this ).data() );
          let  data = table.row( this ).data();
          id = data.id;
          console.log('idecko je '+data.id)
   for (var i in data) {
       console.log(data[i]+','+i);
       if (i=="datum")  {
           console.log("dostanu se na datum")
        $('input[id="datum"]').val(moment(data[i]).format('DD.MM.YYYY'));
       } else if
        (i=="kdo") {
            $("#sel").val(data[i]);
            console.log ('tohle posilam do kdo ve foru'+data[i]);
        }
           else
    $('textarea[id="'+i+'"]').val(data[i]);
   }
         

    $('#modal').modal('show');
    
   
        
});

$('#ulozit').click(function(){
    console.log("kliknuto")
    let kdo = $("#sel").val();
    console.log(kdo);
    let pozn1 = $('textarea[id="pozn1"]').val();
    console.log(pozn1);
    let pozn2 = $('textarea[id="pozn2"]').val();
    console.log(pozn2);
    
  //  let datum = new Date();
    let data = JSON.stringify({kdo,pozn1, pozn2});
            console.log(data);
    $.ajax({
        url: 'http://localhost:3000/usacek/'+id,
        type: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        data: data,
        success: function(response) {
            
                   console.log(response);

          //...
        }
        
     });
    table.ajax.reload(null, false);
    $('#modal').modal('hide');
 });


    
     
    });
 
          

         

    
