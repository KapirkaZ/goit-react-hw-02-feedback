import PropTypes from 'prop-types';

const Counter = ({
  state: { good, neutral, bad },
  onIncrementStat,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={() => onIncrementStat('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onIncrementStat('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onIncrementStat('bad')}>
            Bad
          </button>
        </li>
      </ul>
      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage || 0}%</p> */}
    </>
  );
};

Counter.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default Counter;
