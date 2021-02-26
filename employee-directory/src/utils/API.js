import axios from "axios";

export default {
    getUsers: function() {
      return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?results=50").then((res) => {
          const users = res.data.results;
          const results = users.map((user) => {
            return {
              firstname: user.name.first,
              lastname: user.name.last,
              email: user.email,
              image: user.picture.thumbnail,
              phone: user.phone,
              dob: user.dob
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
