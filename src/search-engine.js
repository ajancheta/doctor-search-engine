export default class Provider {
    constructor(nameInput, symptomInput) {
        this.nameInput = name;
        this.symptomInput = symptom;
    }

    searchByProvider() {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let location = "or-portland";
        let key = process.env.API_KEY;
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&skip=0&limit=10&name=${this.nameInput}&user_key=${key}`;

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

    searchBySymptom() {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        let location = "or-portland";
        let key = process.env.API_KEY;
        let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.symptomInput}&location=${location}&skip=0&limit=10&user_key=${key}`;
        
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