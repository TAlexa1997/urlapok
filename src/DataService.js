import axios from "axios";
class DataService {
    constructor() {
      console.log("DataService");
    //   axios.default.baseUrl="http://localhost:8000/"
    }
  
    getData(vegpont, callback) {
      axios
        .get(vegpont)
        .then(function (response) {
          console.log(response);
          console.log(response.data.Autóim);
          callback(response.data.Autóim);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  
    submitForm() {
      axios.post('/api/submit', this.formModel)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Hiba történt az adatküldés során:', error);
        });
    }
  
  
    postData() {}
  
    putData() {}
  
    deleteData() {}
  }
  
  export default DataService;
  