import PropTypes from 'prop-types';
import ContactItem from "./ContactItem/ContactItem";
import styles from './ContactList.module.css';

const ContactList = ({ visibleName, deleteContact }) => {
    return (
        // <ul className={styles.list}>
        //     {visibleName.map(({ id, name, number }) => (
        //         <ContactItem
        //             key={id}
        //             id={id}
        //             name={name}
        //             number={number}
        //             deleteContact={deleteContact}
        //         />
        //     ))}
        // </ul >
        <table className={styles.list}>
            <tbody>
            {visibleName.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContact={deleteContact}
                />
        ))}
            </tbody>
        </table>
    );
};

ContactList.propTypes = {
    visibleName:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;