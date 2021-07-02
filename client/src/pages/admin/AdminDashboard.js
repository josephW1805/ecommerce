import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getProductByCount } from "../../functions/product";
import Spinner from "../../components/Spinner";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProductByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <h4>All Products</h4>
        {loading && <Spinner />}
        <div className="col">{JSON.stringify(products)}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
