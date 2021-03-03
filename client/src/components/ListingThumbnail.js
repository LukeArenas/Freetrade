import React, { Component } from 'react'
import trashIcon from '../images/trash-can.png'

export default class ListingThumbnail extends Component {
  handleClick = () => {
    this.props.history.push(`/item-details/${this.props.listing._id}`)
    this.props.handleSelection(this.props.listing._id)
    this.props.updateRecentlyViewed()
  }
  render() {
    const { photo, price, title, _id, seller_id } = this.props.listing
    return (
      <div className="thumbnail">
        <div value={_id} onClick={this.handleClick}>
          <img src={photo} alt={title} className="thumbnail-img" />
          <h4>{title}</h4>
          <p className="price">${price}</p>
        </div>
        {seller_id === this.props.currentSellerId &&
        this.props.requestFrom === 'sell' ? (
          <button
            value={_id}
            onClick={this.props.deleteListing}
            className="delete-button"
          >
            <img src={trashIcon} alt="trash-can" className="trash-icon" />
          </button>
        ) : null}
      </div>
    )
  }
}
