import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import PropertyList from "../common/propertyList";
import http from "../../services/httpService";

import "../../assets/styles/home.scss";

class Home extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    const { data: imgs } = await http.get("https://picsum.photos/list");
    const images = [1, 2, 3].map(() => {
      const randomId = imgs[Math.floor(Math.random() * imgs.length)].id;
      return `https://picsum.photos/900/500?image=${randomId}`;
    });
    this.setState({ images });
  };

  render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <div>
          <Carousel>
            {images.map(item => (
              <Carousel.Item key={item}>
                <img
                  width="100%"
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="container mt-5">
          <h4 className="text-danger">Recent Postings:</h4>
          <hr className="hr" />
          <PropertyList queryParams="?status=available" {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
