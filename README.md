# Employee Directory

## Project:

This is an employee directory created using React. The user can view their entire employee directory at once to have quick access to their information, such as name, email, phone number, date of birth, and an included image thumbnail. The user may enter name into search field and may click on the name header in the table to sort alphabetically.

[Deployed Link](https://ryankirkland86.github.io/employee-directory/)

![Image](https://github.com/RyanKirkland86/employee-directory/blob/main/assets/EmployeeDirectory-DEMO.gif)

## Technologies Used:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://www.javascript.com/)
- [JSON](https://www.json.org/json-en.html)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [React](https://reactjs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Process:

![Image](https://github.com/RyanKirkland86/employee-directory/blob/main/assets/NameSortDEMO.gif)

In this GIF, you can see how the sort by name function works. When the user clicks on the carrot in the table header, the list of employee names is sorted alphabetically. Clicking again reverses the sort.

```javascript
  useEffect(() => {
    if (sort === "") {
      setCarrot('\u25BA')
    }
    if (sort === "asc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 < emp2) {
          setCarrot('\u25BC')
          return -1;
        }
        return 0;
      })
    }
    if (sort === "desc") {
      employees.sort((name1, name2) => {
        let emp1 = name1.name.toLowerCase();
        let emp2 = name2.name.toLowerCase();
        if (emp1 > emp2) {
          setCarrot('\u25B2')
          return -1;
        }
        return 0;
      })
    }
  }, [sort, employees])
```


## Deployed Link:

[Deployed Link](https://ryankirkland86.github.io/employee-directory/)

## Authors:

- Ryan Kirkland
- [GitHub](https://github.com/RyanKirkland86)
- [LinkedIn](https://www.linkedin.com/in/ryan-kirkland-619942200/)
- [Contributors](https://bootcamp.berkeley.edu/coding/)

## License:

This project is licensed under the MIT License.

## Acknowledgements:

Thank you to UCB Extension for the help with this project.