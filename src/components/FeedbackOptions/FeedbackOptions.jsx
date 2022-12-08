import PropTypes from 'prop-types';
import {
  ListButton,
  Button,
  ListItem,
} from '../FeedbackOptions/FeedbackOptions.styled';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListButton>
      {options.map(option => (
        <ListItem key={option}>
          <Button
            type="button"
            onClick={() => {
              onLeaveFeedback(option);
            }}
            name={option}
          >
            {option}
          </Button>
        </ListItem>
      ))}
    </ListButton>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
