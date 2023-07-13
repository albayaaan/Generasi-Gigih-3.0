let customers = [
    {
        customerId: "001",
        name: "John Doe",
        email: "johndoe@example.com",
        balance: 5000.0,
    },
    {
        customerId: "002",
        name: "Tsaqib Abyan",
        email: "abyan@example.com",
        balance: 5000.0,
    },
];

export function getAllCustomers() {
    return customers;
}
export function getCustomer(customerId) {
    let customer = customers.find((c) => c.customerId === customerId);
    // console.log(customer);
    return customer;
}
// getCustomer("12345");

export function createCustomer(name, email, initialBalance) {
    let newCustomer = {
        customerId: generateCustomerId(),
        name,
        email,
        balance: initialBalance,
    };
    // console.log(newCustomer);
    return newCustomer;
}
// createCustomer("Abyan", "abyan@test", 5000);

function generateCustomerId() {
    let randomId = Math.random().toString(10).substr(2, 6);
    // console.log(randomId);
    return randomId;
}
// generateCustomerId();
