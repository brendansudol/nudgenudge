import React from 'react'
import ReactDOM from 'react-dom'

import data from './data'
import App from './components/App'

const div = document.getElementById('app')
ReactDOM.render(<App {...data} />, div)
