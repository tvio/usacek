


// var formattedTime = moment(message.datum).format('h:mm a');
// var template = jQuery('#message-template').html();
// var html = Mustache.render(template,{
//    text: message.text,
//    from: message.from,
//    datum: formattedTime
// });

// jQuery('#messages').append(html);



let url = 'http://localhost:3000';

// fetch(url)
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });

(function ($){
$(document).ready(function(){
	//this is our JSON (data)

	data = fetch(url)
    .then(res =>  res.json())
    .then(json => $.parse.JSON(json))
    .then(out => console.log(out.datum))
    .catch(err => { throw err });
	//get a reference to our HTML template




	//tell Mustache.js to iterate through the JSON and insert the data into the HTML template
    var template = $('#template').html();
    output = Mustache.to_html(template, data);
       // console.log(data.kdo);
	//append the HTML template to the DOM
	$('#container').html(output);
})})(jQuery);
