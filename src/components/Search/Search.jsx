import { useState } from "react";
import "./_search.scss";
const Search = ({ onSearch, placeholder = "Search..." }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // Optional: If you want instant search as user types
        // if (onSearch) {
        //   onSearch(event.target.value);
        // }
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        if (onSearch) {
            onSearch(searchTerm);
        }
    };

    return (


        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
                <form className="d-flex gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control" // Bootstrap input styling
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={handleChange}
                        aria-label="Search input" // For accessibility
                    />
                    <button type="submit" className="btn btn-dark">
                        Search
                    </button>
                </form>
            </div>
            <div className="col-3"></div>

        </div>





    );
}


export default Search;