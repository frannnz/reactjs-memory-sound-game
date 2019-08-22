import React, { Component } from "react";

export class Cards extends Component {

  render() {
    return (
      <div>
        {this.props.founded.includes(this.props.item) ? (
          <div className="item founded"> &#10003;          </div>
        ) : (
          <div
            className={
              "item " +
              (this.props.turned.includes(this.props.index) && " opened")
            }
            onClick={() =>
              this.props.clicked(this.props.index, this.props.item)
            }
          >
            {this.props.turned.includes(this.props.index) ? (
              <div>
                &#9654;
              </div>
            ) : (
              <div>{this.props.index + 1}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Cards;
