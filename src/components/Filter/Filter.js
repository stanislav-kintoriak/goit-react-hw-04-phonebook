import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filterValue, filterChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.filter__label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        value={filterValue}
        onChange={filterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
