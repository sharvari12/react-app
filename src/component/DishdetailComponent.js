import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import moment from "moment";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish !== null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }

    return (
      <div />
    );
  }

  renderComments(comments) {
    if (comments !== null) {
      const commentsList = comments.map(comment => (
        <div key={comment.id} className="">
          <li className="list-unstyled mb-4"> {comment.comment}</li>
          <li className="list-unstyled mb-4">-- {comment.author}, {moment(comment.date).format("ll")}</li>
        </div>

      )
      );

      return (
        <div>
          <h4> Comments </h4>
          {commentsList}
        </div>
      );
    }

    return (
      <div />
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish.comments)}
        </div>
      </div>


    );
  }
}

DishDetail.propTypes = {
  dish: PropTypes.object
};

export default DishDetail;
