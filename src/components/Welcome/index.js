import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
    buttonText: 'Subscribe',
  }

  onSubscribe = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState(prevState => ({
        isSubscribed: !prevState.isSubscribed,
        buttonText: 'Subscribe',
      }))
    } else {
      this.setState(prevState => ({
        isSubscribed: !prevState.isSubscribed,
        buttonText: 'Subscribed',
      }))
    }
  }

  render() {
    const {buttonText} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
