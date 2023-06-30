import { useSelector, useDispatch } from 'react-redux';
import { removeProduct} from '../reducers/cart/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector(state => state.cart);

  const handleRemoveProduct = (productId) => dispatch(removeProduct(productId));

  return (
    <>
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Presentación</th>
            <th scope="col">Marca</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList.map(product => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.value.nombre}</td>
                <td scope="row">{product.value.presentacion}</td>
                <td scope="row">{product.value.marca}</td>
                <td scope="row"><button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}