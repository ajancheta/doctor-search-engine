import Provider from './../src/search-engine';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
	$("#search-name").submit(function(event) {
		event.preventDefault();
		$(".results").show();
		let nameInput = $('#name').val();
		let newProvider = new Provider();
		let promise = newProvider.searchByProvider(name);

		promise.then(function (response) {
			let body = JSON.parse(response);
			$("#providerName").append(newProvider.displayName(body));
			$("#newPt").append(newProvider.displayNewPatient(body));
			$("#phone").append(newProvider.displayPhoneNumber(body));
			$("#address").append(newProvider.displayAddress(body));
			
			
		}, function (error) {
			$('.showErrors').text(`There was an error processing your request: ${error.message}`);

		});
	});

		$("#search-specialty").submit(function(event) {
			event.preventDefault();
			$(".results").show();
			let practice = $('#name').val();
			let newProvider = new Provider();
			let promise = newProvider.searchByPractice(practice);
	
			promise.then(function (response) {
				let body = JSON.parse(response);
				$("#providerName").append(newProvider.displayName(body));
				$("#newPt").append(newProvider.displayNewPatient(body));
				$("#phone").append(newProvider.displayPhoneNumber(body));
				$("#address").append(newProvider.displayAddress(body));
				
				
			}, function (error) {
				$('.showErrors').text(`There was an error processing your request: ${error.message}`);
			});
	
	});
});

