import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  let [data, setData] = useState([]);

  async function getData() {
    let { data } = await axios.get(
      "https://shop-easy-backend.onrender.com/product"
    );
    console.log(data);
    const { products } = data.data;
    setData(products);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-center p-5">Featured Products</h1>
      <div className="container py-5">
        <div className="row">
          {data.length === 0 ? (
            <FontAwesomeIcon icon={faSpinner} size="2xl" />
          ) : null}
          {data.map((prod: any, index) => {
            return (
              <div className="col-md-4 p-5" key={index}>
                <img
                  src={prod.image}
                  className="w-100 mb-4 d-inline-block"
                  alt="product"
                />
                <h5 className="mb-3">{prod.productName}</h5>
                <p className="btn btn-primary mb-1">{prod.category}</p>
                <p className="text-danger mb-1">in stock: {prod.stock}</p>
                <p>price {prod.finalPrice}$</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
