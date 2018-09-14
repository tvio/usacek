


// var formattedTime = moment(message.datum).format('h:mm a');
// var template = jQuery('#message-template').html();
// var html = Mustache.render(template,{
//    text: message.text,
//    from: message.from,
//    datum: formattedTime
// });

// jQuery('#messages').append(html);



let url = 'http://localhost:3000';


$(function(){
    $.getJSON(url, function(data){
       
         console.log(data);
        //data = {kdo:"Janik"};
        var template = $('#template').html();
        var output = Mustache.render(template, data);
        $('#container').html(output);

    })

});
// 	// data = fetch(url)
//     // .then(res =>  res.json())
//     // .then(json => $.parse.JSON(json))
//     // .then(out => console.log(out.datum))
//     // .catch(err => { throw err });
// 	// //get a reference to our HTML template
//      $.getJSON(url, function(json){
//         console.log(json);
//         console.log(JSON.stringify(json));
//      }).then(function())
// 	//tell Mustache.js to iterate through the JSON and insert the data into the HTML template
//     var template = $('#template').html();
//     output = Mustache.to_html(template, JSON.stringify(data));
//         console.log(data);
// 	//append the HTML template to the DOM
//     $('#container').html(output);

    
// })});


