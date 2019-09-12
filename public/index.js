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
          {
              window.location.href=res;
               }
        console.log('success');
   })
   };
});

    