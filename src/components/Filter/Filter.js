import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
    return (
        <label> Find contacts by name:
            <input className={styles.title}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;