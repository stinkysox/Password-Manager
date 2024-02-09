import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppItem from '../AppItem'

class AppManager extends Component {
  state = {
    domainName: '',
    username: '',
    password: '',
    userDetailsList: [],
    showPassword: false,
  }

  onChangeResult = event => {
    const searchWord = event.target.value.toLowerCase()
    console.log(searchWord)

    this.setState(prevState => ({
      userDetailsList: prevState.userDetailsList.filter(eachItem =>
        eachItem.domainName.toLowerCase().includes(searchWord),
      ),
    }))
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onDomainNameChange = event => {
    this.setState({domainName: event.target.value})
  }

  OnpassWordChange = event => {
    this.setState({password: event.target.value})
  }

  OnUserNameChange = event => {
    this.setState({username: event.target.value})
  }

  onDeleteItem = id => {
    console.log(id)
    this.setState(prevState => ({
      userDetailsList: prevState.userDetailsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  getRandomColorClass = () => {
    const colors = [
      'red',
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
      'cyan',
      'magenta',
      'lime',
      'pink',
      'teal',
      'lavender',
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  onAddUser = event => {
    const randomColor = this.getRandomColorClass()

    event.preventDefault()
    const {domainName, username, password} = this.state
    if (domainName === '' || username === '' || password === '') {
      alert('Enter Valid Details')
      return
    }
    const newUser = {
      id: uuidv4(),
      domainName,
      username,
      password,
      randomColor,
    }

    this.setState(prevState => ({
      userDetailsList: [...prevState.userDetailsList, newUser],
      username: '',
      password: '',
      domainName: '',
    }))

    document.getElementById('inputDomain').value = ''
    document.getElementById('inputUsername').value = ''
    document.getElementById('inputPassword').value = ''
  }

  render() {
    const {userDetailsList, showPassword} = this.state
    const counterEl = userDetailsList.length
    const isEmpty = userDetailsList.length === 0
    return (
      <div className="bg-container">
        <div className="container">
          <nav className="nav-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
          </nav>
          <div className="card-container">
            <form
              className="inputs-container from-container"
              onSubmit={this.onAddUser}
            >
              <h1 className="add-password">Add New Password</h1>
              <div className="search-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="search-input-image"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-el"
                  onChange={this.onDomainNameChange}
                  id="inputDomain"
                />
              </div>
              <div className="search-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="search-input-image"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-el"
                  onChange={this.OnUserNameChange}
                  id="inputUsername"
                />
              </div>
              <div className="search-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="search-input-image"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-el"
                  onChange={this.OnpassWordChange}
                  id="inputPassword"
                />
              </div>
              <div className="submit-btn-container">
                <button type="submit" className="submit-btn">
                  Add
                </button>
              </div>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
                alt=" password manager"
                className="lock-image"
              />
            </div>
          </div>
          <div className="bottom-container">
            <div className="password-count-container">
              <div className="your-passwords">
                <h1 className="bottom-para">Your Passwords</h1>
                <p className="span">{counterEl}</p>
              </div>
              <div className="bottom-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="bottom-search-image"
                />
                <input
                  type="search"
                  className="bottom-input-el"
                  placeholder="Search"
                  onChange={this.onChangeResult}
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                id="showPassword"
                className="checkbox-el"
                onChange={this.handleCheckboxChange}
              />
              <label htmlFor="showPassword" className="label-el">
                Show passwords
              </label>
            </div>
            <ul className="list-container">
              {isEmpty ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-image"
                  />
                  <p>No Passwords</p>
                </div>
              ) : (
                userDetailsList.map(eachUser => (
                  <AppItem
                    key={eachUser.id}
                    details={eachUser}
                    onDeleteItem={this.onDeleteItem}
                    showPassword={showPassword}
                  />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AppManager
