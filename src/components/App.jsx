import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = optionName => {
    switch (optionName) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercent = Math.round((good / countTotalFeedback()) * 100);
    return positivePercent;
  };

  const total = countTotalFeedback();
  console.log(total);
  const percent = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent}
          />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   //функция на кнопку
//   handleFeedback = e => {
//     const vote = e.target.name;
//     console.log(vote);
//     this.setState(prevState => ({ [vote]: prevState[vote] + 1 }));
//   };

//   //функция на общую сумму
// countTotalFeedback = () => {
//   const { good, neutral, bad } = this.state;
//   // console.log(Object.values(this.state));
//   const totalFeedback = good + neutral + bad;
//   return totalFeedback;
// };

//   // %
// countPositiveFeedbackPercentage = () => {
//   const { good } = this.state;
//   const positivePercent = Math.round(
//     (good / this.countTotalFeedback()) * 100
//   );
//   return positivePercent;
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     console.log(options);
//     const total = this.countTotalFeedback();
//     const percent = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={percent}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
