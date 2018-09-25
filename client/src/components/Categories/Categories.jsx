import React, { Component } from 'react';
import "./Categories.css";
import { Row, Col } from "../Grid";

class Categories extends Component {

    
    state = {
        city: "",
    }
    
    // Grabbing citystate
    handleCityStateChange = (event) => {
        var city = event.target.value;
        this.setState({ citystate: city });
    }

    render() {
        const categories = ["Gaming", "Basketball", "Bicycle", "Canyon Runs", "Pokemon Go"];
        const locations = ["Irvine", "Los Angeles", "Orange", "San Francisco", "Las Vegas", "Phoenix", "Portland", "Seattle", "San Diego", "Blood Gulch"];
        return (
            <div className="categories">
                <div className="appHeader">Who's Down?</div>

                <div className="row justify-content-center">
                    <div className="col-auto">
                        <div className="form-row form-group justify-content-center">
                            <div className="col-sm-6">
                                <label htmlFor="location">Select Location:</label>
                                <select id="inputCityState" className="form-control" onChange={this.handleCityStateChange}>
                                    <option defaultValue>Choose...</option>
                                    {locations.map(city => {
                                        return <option key={city}>{city}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
                {(this.state.city !== "") ?
                <div>
                    <div className="categoryTitle">Pick a Category:</div>
                        {categories.map(name => {
                            return(
                                <Row key={name}>
                                    <Col size="md-12">
                                        <a href={`/${this.state.city.toLowerCase()}/${name.toLowerCase()}`} className="btn btn-lg btnCategories">{name}</a>
                                    </Col>
                                </Row>
                            )
                        })}
                </div> : `Select a location first`}
            </div>
        )
    }
}

export default Categories;