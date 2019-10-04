import React from 'react';
import './home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <div className='header-container'>
            <span className="drip-header1">DRIP</span>
            <span className="drip-header2">INTL.</span>
          </div>
          <div className="titlespace"></div>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://pbs.twimg.com/media/EBS5wlDXsAAJyxl?format=jpg&name=large" id="picArt" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://pbs.twimg.com/media/ECS9TyhXoAIwy-7?format=jpg&name=4096x4096" id="picArt" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://pbs.twimg.com/media/EFPUnmKW4AAbRZN?format=jpg&name=4096x4096" id="picArt" class="d-block w-100" alt="..." />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


        </div>
        <Footer />
      </>
    );
  }

}
export default Home;