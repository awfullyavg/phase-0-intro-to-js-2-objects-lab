// Write your solution in this file!
const employee = {
    name: "Bryant",
    streetAddress: "78 Summit Ave, Apt 101 Jersey City, NJ 07304",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key, value) {
    return {
    ...employee,
    [key]: value,
    };
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
        delete employee[key];
        return employee;
}