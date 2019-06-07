import Provider from './../src/search-engine';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
	$("#search-name").submit(function(event) {
		event.preventDefault();
		$(".results").show();
		let nameInput = $('#nameInput').val();
		let newProvider = new Provider();
		let promise = newProvider.searchByProvider(name);
		console.log(newProvider);
		console.log(nameInput);
		promise.then(function (response) {
			let body = JSON.parse(response);
			$("#name").append(newProvider.displayName(body));
			$("#newPt").append(newProvider.displayNewPatient(body));
			$("#phone").append(newProvider.displayPhone(body));
			$("#address").append(newProvider.displayAddress(body));
			$("#website").append(newProvider.displayWebsite(body));
			
			
		}, function (error) {
			$('.showErrors').text(`There was an error processing your request: ${error.message}`);
		});
	});
	console.log("test");
});

