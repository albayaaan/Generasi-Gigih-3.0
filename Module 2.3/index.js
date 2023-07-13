import Express from "express";
import { transfer } from "./TransactionService.js";
const app = Express();

app.post("/transactions", Express.json(), (req, res) => {
    // console.log(req.body);
    try {
        const { sourceAccount, destinationAccount, amount } = req.body;
        if (!sourceAccount || !destinationAccount || !amount) {
            throw new Error("Insufficient Parameter");
        }
        transfer(sourceAccount, destinationAccount, amount);
        res.status(201).json({ message: "Transaction created successfully" });
    } catch (e) {
        //For example we'll always use code 500 (Internal Server Error)
        res.status(500).json({ error: e.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
