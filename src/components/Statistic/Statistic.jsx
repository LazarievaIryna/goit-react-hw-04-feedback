import PropTypes from 'prop-types';
import {
  StatisticItem,
  StatisticContainer,
} from '../Statistic/Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticContainer>
      <ul>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>

        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
      </ul>
    </StatisticContainer>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
