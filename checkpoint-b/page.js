
import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");

  element.replaceChildren();

  list.forEach((item) => {
    const entry = document.createElement("li");
    entry.classList.add("entry");
    entry.textContent = `${item.name} - ${item.price} EGP`;

    element.append(entry);
  });
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  document.querySelector("#filter-button").addEventListener("click", () => {
    renderItems(matching());
  });
}

start();
