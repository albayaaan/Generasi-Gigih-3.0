let transactions = [
    {
        transactionId: "123456789",
        sourceId: "12345",
        destinationId: "67890",
        amount: 5.0,
        timestamp: "2023-06-01T00:00:00.000Z",
    },
];

export function createTransaction(sourceId, destinationId, amount) {
    const transaction = {
        transactionId: generateTransactionId(),
        sourceId,
        destinationId,
        amount,
        timestamp: new Date().toISOString(),
    };
    // console.log(transaction);
    transactions.push(transaction);
    return transaction;
}
// createTransaction("12345", "23456", 10);

// Helper function to generate a unique transaction ID
function generateTransactionId() {
    // Generate a random string or use a unique ID generation algorithm
    return Math.random().toString(36).substr(2, 9);
}
