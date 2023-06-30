import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../reducers/cart/cartSlice';

export const ProductsList = ({ products }) => {
    const dispatch = useDispatch();

    const { productList } = useSelector(state => state.cart);

    const handleAddOrRemoveProduct = (productId) => {
        const product = products.find(product => product.id === productId);
        if (productList.find(pdt => pdt.id === productId)) {
            dispatch(removeProduct(productId));
        } else {
            dispatch(addProduct(product));
        }
    }

    return (
        <>
            <h2>Listado de productos</h2>
            <div className="row">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="col-3 mt-3">
                                <h4>{product.value.nombre}</h4>
                                <p><b>Presentación:</b> {product.value.presentacion}</p>
                                <p><b>Marca:</b> {product.value.marca}</p>
                                <button
                                    className={`btn ${productList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
                                    onClick={() => handleAddOrRemoveProduct(product.id)}
                                >
                                    {productList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} Agregar a Carrito
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}