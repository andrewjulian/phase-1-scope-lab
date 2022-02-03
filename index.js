var customerName = 'bob';
const leastFavoriteCustomer = "karen";

function upperCaseCustomerName () { 
    customerName = customerName.toUpperCase();
    return customerName;
}


function setBestCustomer () {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer (newCustomerName) {
    bestCustomer = newCustomerName;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Chad";
}
