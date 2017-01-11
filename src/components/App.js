import axios from 'axios'
import React from 'react'

import Goal from './Goal'
import Header from './Header'
import Referee from './Referee'
import Wager from './Wager'

const sections = {
  1: Goal,
  2: Wager,
  3: Referee,
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      deadline: '',
      goal: '',
      step: 1,
      stripe: null,
    }
    this.handleChange = ::this.handleChange
    this.nextStep = ::this.nextStep
    this.previousStep = ::this.previousStep
    this.stripeTokenHandler = ::this.stripeTokenHandler
    this.stripeOpen = ::this.stripeOpen
  }

  componentDidMount() {
    this.stripeHander = StripeCheckout.configure({
        ...this.props.stripeConfig,
        token: this.stripeTokenHandler,
    })
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  nextStep() {
    this.setState({ step: this.state.step + 1 })
  }

  previousStep() {
    this.setState({ step: this.state.step - 1 })
  }

  stripeTokenHandler(token) {
    console.log(token)
    this.setState({ stripe: 'saving' })

    axios.post('/save', token)
      .then(response => { console.log(response) })
      .catch(error => { console.log(error) })
  }

  stripeOpen() {
    this.stripeHander.open()
  }

  render() {
    const { state } = this
    const { step } = state
    const Section = sections[step]

    return (
      <div>
        <Header />
        <div className='p2 container'>
          {Section && <Section
            {...state}
            onChange={this.handleChange}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />}
          {step}
          <button onClick={this.previousStep}>dec</button>
          <button onClick={this.nextStep}>inc</button>
          <br />
          <button onClick={this.stripeOpen}>stripe</button>
          <br />
          <pre>{JSON.stringify(state)}</pre>
        </div>
      </div>
    )
  }
}

export default App
