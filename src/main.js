import Provider from './../src/search-engine';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    
    $("#search-name").submit(function(event) {  
			event.preventDefault();
			let nameInput = $('#nameInput').val();
			let newProvider = new Provider();
			let promise = newProvider.searchByProvider(name);
	
      promise.then(function(response) {
				let body = JSON.parse(response);
				
				$("#name").append(Provider.displayName(body));
				$("#newPatient").append(Provider.displayNewPatient(body));
				$("#phone").append(Provider.displayPhone(body));
				$("#address").append(Provider.displayAddress(body));
				$("#website").append(Provider.displayWebsite(body));
        
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });