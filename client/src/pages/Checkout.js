import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../functions/user";

const Checkout = ({ history }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    try {
      getUserCart(user.token).then((res) => {
        console.log(`user cart res`, JSON.stringify(res.data, null, 4));
        setProducts(res.data.products);
        setTotal(res.data.cartTotal);
      });
    } catch (err) {
      alert(":(");
      history.push("/cart");
    }
  }, []);

  const saveAddressToDb = () => {
    //
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        textarea
        <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
          Save
        </button>
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        coupon input and apply button
      </div>
      <div className="col-md-6">
        <h4>Order Summary</h4>
        <hr />
        <p>{products.length} Products</p>
        <hr />
        <p>
          {products.map((p, i) => (
            <div key={i}>
              <p>
                {p.product.title} ({p.color}) ${p.product.price * p.count}
              </p>
            </div>
          ))}
        </p>
        <hr />
        <p>Cart Total: ${total}</p>

        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary">Place Order</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-primary">Empty Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
