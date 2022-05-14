import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {totalTimeInSeconds: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.intervalId = setInterval(this.incrementTimeBySecond, 1000)
    this.setState({isTimerRunning: true})
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onResetTimer = () => {
    this.setState({totalTimeInSeconds: 0, isTimerRunning: false})
  }

  incrementTimeBySecond = () => {
    this.setState(prevState => ({
      totalTimeInSeconds: prevState.totalTimeInSeconds + 1,
    }))
  }

  getTime = () => {
    const {totalTimeInSeconds} = this.state

    const minutes = Math.floor(totalTimeInSeconds / 60)
    const seconds = Math.floor(totalTimeInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state

    const startButtonStyle = 'btn-start'
    const stopButtonStyle = 'btn-stop'
    const resetButtonStyle = 'btn-reset'

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-logo-name">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="stopwatch"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="timer">{this.getTime()}</h1>
          <div className="timer-control-buttons-container">
            <button
              type="button"
              className={`btn ${startButtonStyle}`}
              onClick={this.startTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className={`btn ${stopButtonStyle}`}
              onClick={this.stopTimer}
              disabled={!isTimerRunning}
            >
              Stop
            </button>
            <button
              type="button"
              className={`btn ${resetButtonStyle}`}
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
