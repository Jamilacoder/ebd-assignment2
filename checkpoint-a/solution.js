// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";




// 1. Get all orders from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return only orders from Giza with cancelled status
export function myOrders(orders) {
  return orders.filter(
    order => order.city === "Giza" && order.status === "cancelled"
  );
}

// 3. Calculate total revenue
export function summarize(orders) {
  return orders.reduce(
    (total, order) => total + order.price * order.quantity,
    0
  );
}

// 4. Find an order and return its description.
// If it doesn't exist, return an error message instead.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch {
    return `Order ${id} not found`;
  }
}

// 5. Keep only student and item, then convert to JSON text
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(order => ({
      student: order.student,
      item: order.item
    }))
  );
}

// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
