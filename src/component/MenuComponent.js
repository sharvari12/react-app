import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import DishDetail from "./DishdetailComponent.js";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <div>
          <DishDetail dish={dish}/>
        </div>
      );
    }
    return (
      <div/>
    );
  }

  render() {
    const menu = this.props.dishes.map(dish => (
      <div className="col-12 col-md-5 m-1" key={dish.id}>
        <Card
          onClick={() => this.onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  dishes: PropTypes.array
};

export default Menu;
