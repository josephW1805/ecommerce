import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../functions/product";
import ProductCreateForm from "../../../components/forms/ProductCreateForm";
import { getCategories, getCategorySubs } from "../../../functions/category";
import FileUpload from "../../../components/forms/FileUpload";
import Spinner from "../../../components/Spinner";

const ProductUpdate = ({ match }) => {
  const { user } = useSelector((state) => ({ ...state }));
  // router
  const { slug } = match.params;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4>Update Product</h4>
          {JSON.stringify(slug)}
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
