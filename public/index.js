$(document).ready(function(){

    $("#heslo").keypress(function() {
        if (event.which == 13) callback();
    });
    $("#jmeno").keypress(function() {
        if (event.which == 13) callback();
    });
    

    $('#login').click(function(){callback()});
    
    var  callback = function(){
    var jmeno = $("#jmeno").val();
    var heslo = $("#heslo").val();
    var data = JSON.stringify({jmeno, heslo});
    var data2 = ({jmeno, heslo});
   $.post('/login',data2, (x)=>(console.log(x)))
   .done(function(res){
        if (res=="nee"){alert("Špatné přihlašovací údaje")}
        else
          {window.location.href=res}
        console.log('success');
   })
   };
});
    // // $.ajax({
    // //     url:"/login",
    // //     type:'POST',
    // //     dataType: "json",
    // //     dataType: "html",
    // //     contentType: 'application/json',
    // //     async: true,
    // //     data:`${data}`,
    // //     success: function(res) {
    // //                     console.log(res);
                       
    // //                     $("index").html(res);
    // //                       }
    // //                 , 
    // //                     error: function (jqxhr) {
    // //                         console.log(`Error ${jqxhr.responseText}`);
    // //                         alert(`${jqxhr.responseText}`);

    // //                     }
    // // })
    // }});
        
    //     }
    // else{
    // if ( jmeno =='' || heslo ==''){
    // $('input[type="text"],input[type="password"]').css("border","2px solid red");
    // $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
    // alert("Prosím vyplňte obě položky.");
    // } 
    // else if(jmeno=!'usacek') {
    // $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    // $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
    // alert('Jméno není správě');
    // } 
    // else if(heslo=!'Lego1234'){
    // $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
    // alert('Heslo není správně');
    // }  }
    // })}
    // );
    
    