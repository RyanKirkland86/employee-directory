import axios from "axios";

export default {
    getEmployees: function() {
      return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?results=50").then((res) => {
          const employees = res.data.results;
          const results = employees.map((employee) => {
            return {
              name: `${employee.name.first} ${employee.name.last}`,
              email: employee.email,
              image: employee.picture.thumbnail,
              phone: employee.phone,
              dob: employee.dob.date
            };
          });
          resolve(results);
        }).catch((err) => reject(err));
      });
    },
    // Return a Promise to simulate an async call
    // getLanguagesList: function() {
    //   return new Promise((resolve) => {
    //     resolve(languages);
    //   });
    // }
};
