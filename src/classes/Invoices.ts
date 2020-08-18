export class Invoice {
  constructor(
    readonly client: string,
    private detail: string,
    public amount: number
  ) {}
  format() {
    return "${this.client} owes £${this.amount} for ${this.details}";
  }
}
