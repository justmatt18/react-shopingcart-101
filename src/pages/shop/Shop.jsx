
import PRODUCTS from "../../products"
import Product from "./Product"

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Tech and Apparel</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Shop