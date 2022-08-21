export default function Categories({categories, filterItems}) {
    return(
        <div className="btn-container">
            {categories.map((category, index) => <button className="filter-btn" key={index} onClick={() => filterItems(category)} >{category}</button>)}
        </div>
    )
}