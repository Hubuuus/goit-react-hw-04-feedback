import { useState, useEffect } from "react";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import css from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const countTotalFeedback = () => {
    setTotal(feedback.good + feedback.neutral + feedback.bad);
  };

  const countPositiveFeedbackPercentage = () => {
    setPercentage((feedback.good / total) * 100 - (((feedback.good / total) * 100) % 1));
  };

  const onLeaveFeedback = options => {
    setFeedback(prev => ({
      ...prev,
      [options]: feedback[options] + 1,
    }));
  };

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedback, total]);

  const options = ["good", "neutral", "bad"];
  return (
    <div className={css.app}>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title='Statistics'>
        {total === 0 ? (
          <Notification message='There is no feedback' />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     percentage: 0,
//   };

//   countTotalFeedback = () => {
//     this.setState(prevState => ({
//       total: prevState.good + prevState.neutral + prevState.bad,
//     }));
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(prevState => ({
//       percentage:
//         (prevState.good / prevState.total) * 100 - (((prevState.good / prevState.total) * 100) % 1),
//     }));
//   };

//   onLeaveFeedback = options => {
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//     console.log(this.state);
//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   render() {
//     const options = ["good", "neutral", "bad"];
//     return (
//       <div className={css.app}>
//         <Section title='Please leave feedback'>
//           <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>
//         <Section title='Statistics'>
//           {this.state.total === 0 ? (
//             <Notification message='There is no feedback' />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.state.total}
//               percentage={this.state.percentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
