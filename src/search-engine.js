let apiKey = process.env.exports.API_KEY;

export default class Provider {

    searchByProvider(providerName, numberOfProviders) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let location = "or-portland";
        
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&skip=0&limit=10&name=${this.nameInput}&user_key=${apiKey}`;

        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
             reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    } 

    searchByPractice() {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let location = "or-portland";
        let key = process.env.API_KEY;
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${practice}&location=${location}&skip=0&limit=${count}&user_key=${apiKey}`;

        
        request.onload = function () {
          if (this.status === 200) {
            resolve(request.response);
          } else {
             reject(Error(request.statusText));
          }
        }
        request.open("GET", url, true);
        request.send();
      });
    } 
  }

  displayName(response){
    let result = "";

    if(response.data.length === 0){
      return "There was no matching result";
    }
    for(let i = 0; i < response.data.length; i++) {
      result += '<li>' + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + '</li>';
    }
    return result;
  }

  displayAddress(response){
    let result = "";

    for(let i = 0; i < response.data.length; i++) {
      result += '<li>' + response.data[i].practices[0].visit_address.street + " " + response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "</li><br>";

    }
    return result;
  }

  