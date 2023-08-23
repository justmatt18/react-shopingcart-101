
const Product = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, productName, price, imgUrl } = props.product;
  return (
    <div>{productName}</div>
  )
}

export default Product