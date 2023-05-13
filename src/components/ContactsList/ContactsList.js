import PropTypes from 'prop-types';
import { ListItem } from './ListItem/ListItem';
import css from './ContactsList.module.css';

export const ContactList = ({ renderList, onDeleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {renderList.map(renderedItem => ( 
      <ListItem key={renderedItem.id} giveContact={renderedItem} giveDeleteContact={onDeleteContact} />))
    }
     
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  renderList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
