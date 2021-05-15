import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const MenuItem = (props) => {
  return (
    <a
      onClick={() => props.onSelect(props.text)}
      href="#"
      className="menu-item"
    >
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const handleOpened = () => {
    setMenuOpened(!menuOpened); //znegovany stav, jinak pred tim setMenuOpened(true)
  };

  const [pageTitle, setPageTitle] = useState('Domů');

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  };

  return (
    <>
      <header>
        <div className={menuOpened === true ? 'menu' : 'menu menu--closed'}>
          <button onClick={handleOpened} className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectItem} text="Blog" />
            <MenuItem onSelect={handleSelectItem} text="Domů" />
            <MenuItem onSelect={handleSelectItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
