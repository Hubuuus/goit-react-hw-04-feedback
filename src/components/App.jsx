// import { Widget } from "./Widget.jsx";

import { Component } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css";

export class App extends Component {
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

  onLeaveFeedback = options => {
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
    }));
    console.log(this.state);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const options = ["good", "neutral", "bad"];
    return (
      <div className={css.app}>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {this.state.total === 0 ? (
            <Notification message='There is no feedback' />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              percentage={this.state.percentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
