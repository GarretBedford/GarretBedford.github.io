
// Problem 1,2,3

let Employees = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": "40000",
      "raiseEligible": true,
      "wfh": false,
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": "18500",
      "raiseEligible": true,
      "wfh": false,
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": "21200",
      "raiseEligible": false,
      "wfh": false,
    },
    {
      "firstName": "Anna",
      "department": "Tech",
      "designation": "Executive",
      "salary": "25600",
      "raiseEligible": false,
      "wfh": false,
    },
  ]
}

// Function to add a new employee -- it's built to be changeable (see the function call below)

function addEmployee(obj, name, dep, des, salary, raise, work) {
  let employee = {
    "firstName": name,
    "department": dep,
    "designation": des,
    "salary": salary,
    "raiseEligible": raise,
    "wfh": work,
  };
  console.log('employee');

  obj['employees'].push(employees); // the push() method adds a value to the employees object/array.

}

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['companyName'];
  console.log(myH1);
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Company Name: ${obj['companyName']} // website: ${obj['website']}`;

  header.appendChild(myPara);
}

// Function to populate employee cards; will run for however many employees are in the "employees" array of our JSON.

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const employees = obj['employees'];

  for (const employee of employees) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');
    const myPara6 = document.createElement('p');

    myH2.textContent = employee.name;
    myPara1.textContent = `First Name: ${employee.firstName}`;
    myPara2.textContent = `Department: ${employee.department}`;
    myPara3.textContent = `Designation: ${employee.designation}`;
    myPara4.textContent = `Salary: ${employee.salary}`;
    myPara5.textContent = `Raise Eligible: ${employee.raiseEligible}`;
    myPara6.textContent = `Working From Home: ${employee.wfh}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);

    section.appendChild(myArticle);
  }
}

// Function to tabulate the total salary of all employees.
// Problem 4

function calcCost(obj) {
  const middle = document.querySelector('middle');
  const employees = obj['employees'];

  console.log('// Problem 4');

  let c = 0;

  for (const employee of employees) {
    c = Number(c) + Number(employee.salary);

    console.log(`  +   Salary:  ${employee.salary}`);
  }
  console.log('Total Salary: ' + c);
}

// Function to calculate and apply raises to all eligible employees.
// Problem 5

function calcRaise(obj) {
  const employees = obj['employees'];

  console.log('// Problem 5');

  for (const employee of employees) {

    console.log(`Old Salary: ${employee.salary}`);

    let newS = 0;

    if (!!employee.raiseEligible) {
      newS = (Number(employee.salary)*.1);
      obj['employees']['raiseEligible'] = false;
      employee.raiseEligible = obj['employees']['raiseEligible'];
    }
    obj['employees']['salary'] = Number(newS) + Number(employee.salary);
    employee.salary = obj['employees']['salary'];
    console.log(`    Salary: ${employee.salary}`);
    console.log(`Raise Eligible: ${employee.raiseEligible}`);
  }
}

// Function to update employee profiles to change working from home.
// Problem 6

function calcHome(obj, change) {
  const employees = obj['employees'];
  const firstNames = change;

  console.log('// Problem 6');

  for(const name in firstNames) {

  console.log(`Change work from home for: ${firstNames[name]}`);

    for (const employee of employees) {

      if (employee.firstName === firstNames[name]) {
        obj['employees']['wfh'] = true;
        employee.wfh = obj['employees']['wfh'];
      }
      console.log(`Name: ${employee.firstName}`);
      console.log(`Working From Home: ${employee.wfh}`);
    }
  }
}

populateHeader(Employees);
populateEmployees(Employees);
calcCost(Employees);
calcRaise(Employees);
calcHome(Employees, ['Anna', 'Sam']);
