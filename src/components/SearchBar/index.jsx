import React, { useState } from 'react';
import styles from "./SearchBar.module.scss"

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            className={styles.searchbar}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
        />
    );
}

export default SearchBar;
