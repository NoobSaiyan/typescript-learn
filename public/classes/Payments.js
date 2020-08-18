export class Payment {
    constructor(readonly, detail, amount) {
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return "${this.client} owes £${this.amount} for ${this.details}";
    }
}
