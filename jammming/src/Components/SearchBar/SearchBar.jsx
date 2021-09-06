import React from 'react'
import './SearchBar.css'

export default function SearchBar({onSearch}) {
    const search = term =>{
        onSearch(term)
    }
    const handleTermChange = e => {
        search(e.target.value)
    }
    return (
        <div className="SearchBar">
            <input onChange={ e =>{handleTermChange(e)}} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}
