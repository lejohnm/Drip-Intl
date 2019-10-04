import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';





class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:3002/api/products')
            .then(res => res.json())
            .then(products => this.setState({ products }, () => products))
        console.log(this.state.products)
    }

    render() {
        return (


            <>
                <Navbar />
                <div className="card-container">
                    {
                        this.state.products.filter(
                            product => product.product_type === this.props.activeproduct
                        ).map(clothing => {
                            return (
                                <>
                                <div className="card">
                                    <img className="card-img-top" src={clothing.product_image} alt="#" />
                                    <div className="card-body">
                                        <p className="card-text">{clothing.product_name}</p>
                                        <p className="card-text">{clothing.price}</p>
                                        <p className="card-text">{clothing.product_description}</p>
                                        <p className="cart-button"></p>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
                <Footer />
            </>
        );

    }
}

export default Product;