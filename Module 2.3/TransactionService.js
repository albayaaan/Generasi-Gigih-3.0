import { getCustomer, getAllCustomers } from "./CustomerModel.js";
import { createTransaction } from "./TransactionModel.js";

export function transfer(sourceId, destinationId, amount) {
    const sourceAccount = getCustomer(sourceId);
    const destinationAccount = getCustomer(destinationId);
    if (!sourceAccount || !destinationAccount) {
        throw new Error("Invalid source or destination account");
    }
    if (sourceAccount.balance < amount) {
        throw new Error("Insufficient balance in the source account");
    }
    sourceAccount.balance -= amount;
    destinationAccount.balance += amount;
    createTransaction(
        sourceAccount.customerId,
        destinationAccount.destinationId,
        amount
    );
    console.log(getAllCustomers());
    return;
}

// transfer("001", "002", 5);
