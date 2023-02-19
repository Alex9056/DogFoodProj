import './Search.css'

export const Search = ({ setSearchQuery }) => {
    return (
        <input 
        placeholder='Поиск...' 
        className="search__input" 
        onChange={(e)=>setSearchQuery(e.target.value)}/>
    )
}