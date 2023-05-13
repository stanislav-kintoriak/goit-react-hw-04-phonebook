import PropTypes from 'prop-types';
import css from './ListItem.module.css';

export const ListItem = ({ giveContact:{ id, name, number }, giveDeleteContact }) => (
    <li>
      <div>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button
          className={css.listItem__button}
          type="button"
          onClick={() => giveDeleteContact(id)}
          key={id}
        >
          Delete
        </button>
      </div>
    </li>
  );
;

ListItem.propTypes = {
  giveDeleteContact: PropTypes.func.isRequired,
  giveContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
