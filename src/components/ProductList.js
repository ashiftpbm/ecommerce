import React,{useState, } from "react";
import withContext from "../withContext";
import { stockData } from "../db";
import "../App.css";

export const Stock = ({ company, vendor, category, stockPrice ,available, image}) => {
  var [count, setCount] = useState(0)

 var incre= ()=>{
   setCount(count++)
 }
 var decre= ()=>{
  setCount(count--)
}
  if (!company) return <div />;
  return (

    <table className="table">
      <tbody>
        <tr >
          <td>
            <img src={image} alt="photo" height="300px" width="300px" />
          </td>
          <td scope="col">
            <h5 className="company-color">{company}</h5>
          </td>
          <td scope="col">
            <h5 className="table-text">{vendor}</h5>
          </td>
          <td scope="col">
            <h5 className="table-text">{category}</h5>
          </td>
          <td>
            <h4 className="table-text">{stockPrice}</h4>
          </td >
          <td>
            <h4 className="table-text">{available === 0?"Out of Stock":"Available"}</h4>
          </td >
          
         
        
        </tr>
        
       
      </tbody>
      <button onClick={incre}>
           +
          </button>
          <div>
            {count}
          </div>
          <button onClick={decre}>
            -
          </button>
    </table>
    
    
    
  );
};

const ProductList = props => {
  return (
    <>
      <div className="hero is-primary">
      <div className="hero-body container">
          <h4 className="title"> Products</h4>
        </div>
     </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
        <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                company={data.company}
                vendor={data.vendor}
                stockPrice={data.stockPrice}
                image={data.image}
                category={data.category}
                available={data.available}
              />
            </div>
            );
          })}
      </div>
        </div>
      </div>
    </>
  );
};

export default withContext(ProductList);
