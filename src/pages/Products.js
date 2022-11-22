import { NavLink } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>Products Page</h1>
            <ul>
                <li>
                    <NavLink to="product-detail/1">Product 1</NavLink>
                </li>
                <li>
                    <NavLink to="product-detail/2">Product 2</NavLink>
                </li>
                <li>
                    <NavLink to="product-detail/3">Product 3</NavLink>
                </li>
            </ul>
        </section>
    )
};

export default Products;