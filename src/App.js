import { useState } from 'react';
import Categories from './components/Categories';
import items from './components/data'
import Menu from './components/Menu';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const allCategories = ["all",  ...new Set(items.map(item => item.category))]

  const filterItems = category => {
    if(category === "all") return setMenuItems(items)
   const newMenu = items.filter(item => item.category === category)
   setMenuItems(newMenu)
  }
  
  return (
    <main>
      <section className='menu container'>
      <div className='title'>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
      <Categories categories={allCategories} filterItems={filterItems}/>

      <div>
      <Menu items={menuItems}/>
      </div>
      </section>
    </main>
  );
}

export default App;
