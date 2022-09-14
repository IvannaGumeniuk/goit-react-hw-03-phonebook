import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
   return (
      // <li className={styles.item} id={id}>
      //    {name}: {number}
      //    <button className={styles.button}
      //       type="button"
      //       onClick={() => deleteContact(id)}
      //    > Delete
      //    </button>
      // </li>
      <tr className={styles.item} id={id}>
            <td>{name}: {number}</td>
            <td> <button className={styles.button}
            type="button"
            onClick={() => deleteContact(id)}
         > Delete
         </button></td>
      </tr>
   );
};

ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;