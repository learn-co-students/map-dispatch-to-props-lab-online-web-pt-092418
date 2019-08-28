import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}
// const mapStatetoDispatch  = dispatch =>{
//   return {
//     addItem: () => {
//       dispatch(addItem)
//     }
//   }
// }

export default connect(mapStateToProps)(Restaurants);
