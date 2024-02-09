import {Component} from 'react'
import './index.css'

const AppItem = props => {
  const {details, onDeleteItem, showPassword} = props
  const {id, domainName, username, password, randomColor} = details
  const onDelete = () => {
    onDeleteItem(id)
  }
  const firstname = domainName[0]

  return (
    <li className="item">
      <div className={`firstname-logo ${randomColor}`}>
        <p className="first-name">{firstname}</p>
      </div>
      <div className="details-container">
        <div className="text-contianer">
          <p>{domainName}</p>
          <p>{username}</p>
          {showPassword ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
        <div className="delete-icon-container">
          <button
            className="delete-btn"
            type="button"
            onClick={onDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppItem
