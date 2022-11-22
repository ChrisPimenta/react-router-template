import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
    // Array of all the route params /:id/:age/:name = [id, age, name]
    const params = useParams();

    return (
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetail;