import React from "react";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="section-center">
                {this.props.items.map(item => {
                    const {id, title, price, img, desc} = item
                    return(
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo'/>
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className="price">${price}</h4>
                                </header>
                                <p className="item-text">{desc}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }
}

export default Menu