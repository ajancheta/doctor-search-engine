export default class Provider {

    searchByProvider(name) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        // let location = "or-portland";
        let apiKey = process.env.exports.apiKey;

        let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;

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

    searchByPractice(practice) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        // let location = "or-portland";
        let apiKey = process.env.exports.apiKey;

        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${practice}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;


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

  displayName(response) {
    let result = "";

    if(response.data.length === 0){
      return "There is no matching result";
    }
    for(let i = 0; i < response.data.length; i++) {
      result += "<li>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</li><br>";
    }
    return result;
  }
  
  displayPhoneNumber(response) {
    let result = "";

    for(let i = 0; i < response.data.length; i++) {
      result += "<li>" + response.data[i].practices[0].phones[0].number + "</li><br>";
    }
    return result;
  }

  displayAddress(response) {
    let result = "";

    for(let i = 0; i < response.data.length; i++) {
      result += "<li>" + response.data[i].practices[0].visit_address.street + " " + response.data[i].practices[0].visit_address.city + " " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip + "</li><br>";
    }
    return result;
  }

  displayNewPatient(response) {
    let result = "";
    for (let i = 0; i < response.data.length; i++) {
      if(response.data[i].practices[0].accepts_new_patients === true){
        result += "<li>Yes<li><br>";
      }else{
        result += "<li>No<li><br>";
      }
    }
    return result;
  }
}
  

  