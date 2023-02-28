import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  clickingButton = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  ongoingButton = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.ongoingButton()

    return (
      <div className="black-container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.clickingButton}>
          {btnText}
        </button>
      </div>
    )
  }
}

export default Welcome
