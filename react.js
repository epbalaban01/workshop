import React, { useState, useEffect } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Sayfa yüklendiğinde verileri al
    fetch('https://northwind.vercel.app/api/products')
      .then((response) => response.json())
      .then((data) => {
        // Verileri işle ve menü öğelerini ayarla
        const randomMenuItems = getRandomMenuItems(data, 5);
        setMenuItems(randomMenuItems);
      })
      .catch((error) => {
        console.error('Veriler alınamadı: ', error);
      });
  }, []);

  // Scroll to top fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <header>
        {/* Navbar */}
        <div className="w3-top">
          {/* Navbar içeriği */}
        </div>

        {/* Header */}
        <header className="w3-display-container w3-content w3-wide" style={{ max-width: '1600px', min-width: '500px' }} id="home">
          <img className="w3-image" src="/w3images/hamburger.jpg" alt="Hamburger Catering" width="1600" height="800" />
          <div className="w3-display-bottomleft w3-padding-large w3-opacity">
            <h1 className="w3-xxlarge">Le Catering</h1>
          </div>
        </header>
      </header>

      {/* Page content */}
      <div className="w3-content" style={{ max-width: '1100px' }}>
        {/* About Section */}
        <div className="w3-row w3-padding-64" id="about">
          {/* Hakkında içeriği */}
        </div>

        <hr />

        {/* Menu Section */}
        <div className="w3-row w3-padding-64" id="menu">
          <div className="w3-col l6 w3-padding-large">
            <h1 className="w3-center">Our Menu</h1>
            <ul id="menuItems">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <h4>{item.Name}</h4>
                  <p>{item.QuantityPerUnit}</p>
                  <p>${item.UnitPrice.toFixed(2)}</p>
                  <img src={item.ImageUrl} alt={item.Name} width="100" height="100" />
                </li>
              ))}
            </ul>
          </div>

          <div className="w3-col l6 w3-padding-large">
            <img src="/w3images/tablesetting.jpg" className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: '100%' }} />
          </div>
        </div>

        <hr />

        {/* Contact Section */}
        <div className="w3-container w3-padding-64" id="contact">
          {/* İletişim içeriği */}
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-center w3-light-grey w3-padding-32">
        <button onClick={scrollToTop}>EN BAŞA DÖN</button>
      </footer>
    </div>
  );
}

// Random menü öğelerini almak için yardımcı bir fonksiyon
function getRandomMenuItems(menuData, numItems) {
  const randomMenuItems = [];
  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * menuData.length);
    randomMenuItems.push(menuData[randomIndex]);
  }
  return randomMenuItems;
}

export default App;
