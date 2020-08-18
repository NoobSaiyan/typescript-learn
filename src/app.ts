import { Invoice } from "./classes/Invoices.js";

const invOne = new Invoice("Nibba", "mah moni bruh", 6969);
const invTwo = new Invoice("Nibbi", "not mah moni bruh", 6868);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((element) => {
  console.log(element);
});

const anchor = document.querySelector("a")!;
if (anchor) {
  console.log(anchor.href);
}

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
