import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';





class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeproduct: 'tops',
            products: []
        }


    };
   


    componentDidMount() {
        fetch('http://localhost:3002/api/products')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                this.setState({ products })
            })
        //console.log(this.state.products)
    }



    priceSorter = () => {
    const sortByPrice = (a, b) => a.price - b.price;
    const sortAction = this.state.products.sort(sortByPrice);
    this.setState({products: sortAction})
    }

    priceSorterAsc = () => {
        const sortByPrice = (a, b) => b.price - a.price;
        const sortAction = this.state.products.sort(sortByPrice);
        this.setState({products: sortAction})
        }

    render() {
        return (


            <>
                <Navbar />
                
                {/* <div id="list-example" className="list-group">
        <a className="list-group-item" href="#tops" onClick= {()=> props.onchange('tops')}>Tops</a>
        <a className="list-group-item" href="#bottoms" onClick= {()=> props.onchange('bottoms')}>Bottoms</a>
        <a className="list-group-item" href="#shoes" onClick= {()=> props.onchange('shoes')}>Shoes</a>
      </div> */}

                <div class="price-sort">
                    <button onClick={this.priceSorter} class="button1">Low Price</button>
                    <button onClick={this.priceSorterAsc} class="button2">High Price</button>
                </div>
                
                <div className="card-container">
                    {
                        this.state.products.filter(
                            product => product.product_type === this.state.activeproduct
                        ).map(clothing => {
                            return (
                                <>
                                    <div className="card">
                                        <img className="card-img-top" src={clothing.product_image} alt="#" />
                                        <div className="card-body">
                                            <p className="card-text">{clothing.product_name}</p>
                                            <p className="card-text">${clothing.price}</p>
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