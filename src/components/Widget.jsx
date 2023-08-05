import { Component } from "react";

export class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage:
        (prevState.good / prevState.total) * 100 - (((prevState.good / prevState.total) * 100) % 1),
    }));
  };

  clickHandler = ev => {
    this.setState(prevState => ({
      [ev]: prevState[ev] + 1,
    }));
    console.log(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type='submit' onClick={() => this.clickHandler("good")}>
              good
            </button>
          </li>
          <li>
            <button type='submit' onClick={() => this.clickHandler("neutral")}>
              neutral
            </button>
          </li>
          <li>
            <button type='submit' onClick={() => this.clickHandler("bad")}>
              bad
            </button>
          </li>
        </ul>
        <div>
          <h2>Statistic</h2>
          <ul>
            <li>
              <div>Good: {this.state.good}</div>
            </li>
            <li>
              <div>Neutral: {this.state.neutral}</div>
            </li>
            <li>
              <div>Bad: {this.state.bad}</div>
            </li>
            <li>
              <div>Total: {this.state.total}</div>
            </li>
            <li>
              <div>Positiv feedback: {this.state.percentage} %</div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
