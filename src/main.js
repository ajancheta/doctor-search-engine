import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    let userSymptom;
    
    $("#mood-form").submit(function(event) {  
      event.preventDefault();
      userSymptom = $("#symptom").val();
      $('#symptom').val("");
      $("#userInput").text(userSymptom);
      $('#symptom').show();
  
      let searchByName = new ProviderSearch();
      let promise = searchByName.getProvider();
	
      promise.then(function(response) {
        let body = JSON.parse(response);
        
      
        
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });