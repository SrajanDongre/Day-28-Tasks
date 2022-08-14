import React from "react";
import { Formik } from "formik";
import "./styles.css";

export default function FormikCom() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          productId: "",
          rating: 0,
          manufacturing: "",
          expiry: ""
        }}
        validate={(values) => {
          let errors = {};
          if (!values.name) {
            errors.name = "Product Name is Required";
          }

          if (values.rating < 1){
            errors.rating = "Product Rating is invalid";
          }
          
          if (!values.manufacturing){
            errors.manufacturing= "Manufacturing date is not mentioned";
          }

          if (values.expiry <= values.manufacturing){
            errors.expiry= "Invalid Expiry Date"
          }

          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <form id='form'onSubmit={handleSubmit}>
              <label>Product Name</label>
              <br />
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              <br />
              <span style={{color:"red"}}>
              {errors.name ? errors.name : ""}
              </span>
              <br />
              <label>Rating</label>
              <br />
              <input
                type="number"
                value={values.rating}
                name="rating"
                onChange={handleChange}
              />
              <br />
              <span style={{color:"red"}}>
              {errors.rating ? errors.rating : ""}
              </span>
              <br />
              <label>Product Id</label>
              <br />
              <input
                type="text"
                value={values.productId}
                name="productId"
                onChange={handleChange}
              />
              <br />
              <label>Manufacturing Date</label>
              <br />
              <input
                type="date"
                value={values.manufacturing}
                name="manufacturing"
                onChange={handleChange}
              />
              <br />
              <span style={{color:"red"}}>
              {errors.manufacturing ? errors.manufacturing : ""}
              </span>
              <br />
              <label>Expiry Date</label>
              <br />
              <input
                type="date"
                value={values.expiry}
                name="expiry"
                onChange={handleChange}
              />
              <br />
              <span style={{color:"red"}}>
              {errors.expiry ? errors.expiry : ""}
              </span>
              <br />
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
