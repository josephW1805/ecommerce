import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <table className="table table-bordered">
    <thead className="thead-light">
      <tr>
        <th scope="col">Order Id</th>
        <th scope="col">Amount</th>
        <th scope="col">Currency</th>
        <th scope="col">Method</th>
        <th scope="col">Payment</th>
        <th scope="col">Ordered on</th>
        {showStatus && <th scope="col">STATUS</th>}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{order.paymentIntent.id}</td>
        <td>
          {(order.paymentIntent.amount / 100).toLocaleString("en-CA", {
            style: "currency",
            currency: "CAD",
          })}
        </td>
        <td>{order.paymentIntent.currency.toUpperCase()}</td>
        <td>{order.paymentIntent.payment_method_types[0]}</td>
        <td>{order.paymentIntent.status.toUpperCase()}</td>
        <td>
          {order.paymentIntent.payment_method_types[0] === "cash"
            ? new Date(order.paymentIntent.created).toLocaleString()
            : new Date(order.paymentIntent.created * 1000).toLocaleString()}
        </td>
        {showStatus && (
          <td className="badge bg-primary text-white">{order.orderStatus}</td>
        )}
      </tr>
    </tbody>
  </table>
);

export default ShowPaymentInfo;
