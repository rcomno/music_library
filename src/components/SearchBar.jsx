import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)
    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}

export default SearchBar;
/*
import { useState } from "react"

function SearchBar(props) {
    let [searchTerm, setSearchTrem] = useState("")
    return (
        <form>
            <input type="text" placeholder="Enter a search term here" />
            <input type="submit" />
        </form>
    )
}

export default SearchBar;
*/