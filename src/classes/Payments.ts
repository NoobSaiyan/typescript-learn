import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly: string,
    private detail: string,
    public amount: number
  ) {}
  format() {
    return "${this.client} owes £${this.amount} for ${this.details}";
  }
}
