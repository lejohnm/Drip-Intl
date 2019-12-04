import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';





class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }


    };
   


    componentDidMount() {
        fetch('http://localhost:2702/api/products')
            .then(response => response.json())
            .then(products => {
                console.log(products)
                this.setState({ products })
            })
        console.log(this.state.products)
    }



    priceSorter = () => {
    const sortByPrice = (a, b) => a.productPrice - b.productPrice;
    const sortAction = this.state.products.sort(sortByPrice);
    this.setState({products: sortAction})
    }

    priceSorterAsc = () => {
        const sortByPrice = (a, b) => b.productPrice - a.productPrice;
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

                <div className="price-sort">
                    <button onClick={this.priceSorter} className="button1">Low Price</button>
                    <button onClick={this.priceSorterAsc} className="button2">High Price</button>
                </div>
                
                <div className="card-container">
                    {
                        this.state.products.map(clothing => {
                            return (
                                <>
                                    <div className="card">
                                        <img className="card-img-top" src={clothing.productImage} alt="#" />
                                        <div className="card-body">
                                            <p className="card-text">{clothing.productName}</p>
                                            <p className="card-text">${clothing.productPrice}</p>
                                            <p className="card-text">{clothing.productDescription}</p>
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