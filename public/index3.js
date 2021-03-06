let url = "/usacek/";


var dny = ['Ne','Po','Út','St','Čt','Pá','So'];

    $(document).ready(function() {
        
        $.fn.dataTable.moment( 'DD.MM.YYYY' );
        
            var table = $('#primetable').DataTable( {
           filter: true,
            order: [1,"asc"],
            processing: true,
            serverSide: false,
            ajax:{url:url,dataSrc:""},
            dataType: 'json',
            responsive:true,
            contentType: 'application/json; charset=utf-8',
            type: "GET",
            columns: [
                {  data: "kdo",
                render: function (val,type,row)
                     { if (val==1) {
                        return 'Janik'
                      } else if (val==2) {
                        return 'Dalibor'
                       } else {
                        return 'N/A'
                      } }},
                  //  {return val}},
                { data: "datum"},
                //   render: function (val, type, row){
                //     return moment(val).format('DD.MM.YYYY')}},
                   
                { data :"datum",
                   render: function (val,typ,row)
                   {  // x = moment(val).toDate();
                    let den = moment(val,'DD.MM.YYYY').format('YYYY-MM-DDTHH:MM:SS.SSSZ');       
                    return dny[moment(den).day()]}},
                    //return dny[x.getDay()]}},
                { data: "pozn1" },
                { data: "pozn2" },
                
             
            ], 
            pageLength: 15,           
            select: true,
            columnDefs: [
                { orderable: false, targets: '_all' }
            ] ,
            "initComplete": function(settings, json) {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1; //January is 0
                var yyyy = today.getFullYear();

                if(dd<10) {
                    dd='0'+dd
                }

                if(mm<10) {
                    mm='0'+mm
                }
                today = dd+"."+mm+"."+yyyy;
                console.log(today);
               table.page.jumpToData(today, 1); 
            }         
        } );
        
                      

        var id;
        $('#primetable tbody').on( 'click', 'tr', function () {
   console.log( table.row( this ).data() );
          let  data = table.row( this ).data();
          id = data.id;
          console.log('idecko je pri nacteni '+data.id)
   for (var i in data) {
       console.log(data[i]+','+i);
       if (i=="datum")  {
           console.log("dostanu se na datum")
       //$('input[id="datum"]').val(moment(data[i]).format('DD.MM.YYYY'));
       $('input[id="datum"]').val(data[i]);
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
    let datum = $("#datum").val();
    console.log(datum);
    let pozn1 = $('textarea[id="pozn1"]').val();
    console.log(pozn1);
    let pozn2 = $('textarea[id="pozn2"]').val();
    console.log(pozn2);
    console.log('idecko je pri ulozeni: '+id);
  //  let datum = new Date();
    let data = JSON.stringify({kdo,pozn1, pozn2});
            console.log(data);
    $.ajax({
        url: url+id,
        type: 'PUT',
        contentType: 'application/json',
        dataType: 'json',
        data: data,
        success: function(response) {
            
                   console.log(response);

          //...
        }
        
     })
     .done(()=>{table.clear()})
     
     table.ajax.reload(null,false);
    $('#modal').modal('hide');

    let data2 = JSON.stringify({pozn2,datum});
     console.log('data pro email'+data2);
     

$.ajax({
  url:'/email',
  type:"POST",
  data:data2,
  contentType:"application/json; charset=utf-8",
  dataType:"json",
  success: function(ok){
      console.log(ok);}
        })
     });

    });
          

         

    
