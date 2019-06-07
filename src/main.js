import Provider from './../src/search-engine';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    
    $("#search-name").submit(function(event) {  
			event.preventDefault();
			let nameInput = $('#nameInput').val();

			let newProvider = new Provider(nameInput, 0);
			let promise = newProvider.searchByProvider();
	
      promise.then(function(response) {
				let body = JSON.parse(response);
				let mainData = body.data;

				if(mainData.length === 0) {
					$('#printOutName').text('No health care provider for this search.');
				} else {
					for(let i = 0 < mainData.length; i++)
				}
        
      
        
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });