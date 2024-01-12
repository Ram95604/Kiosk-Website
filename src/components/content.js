
import React, { useEffect,useState } from 'react';
import './content.css';
const Content = ({ items,selectedMenu, onSelectMenu, addToCart }) => {
  const [cartItems, setCartItems] = useState({});
  const handleItemClick = (itemName) => {
    onSelectMenu(itemName); 
  };
  const handleAddToCart = (item) => {
    const updatedCartItems = { ...cartItems };
    updatedCartItems[item.id] = (updatedCartItems[item.id] || 0) + 1;
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = { ...cartItems };
    if (updatedCartItems[itemId] > 0) {
      updatedCartItems[itemId] -= 1;
      setCartItems(updatedCartItems);
    }
  };
    useEffect(()=>{
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

        const numBalls = 50;
        const balls = [];
        
        for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.background = colors[Math.floor(Math.random() * colors.length)];
          ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
          ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.width = `${Math.random()}em`;
          ball.style.height = ball.style.width;
          
          balls.push(ball);
          document.body.append(ball);
        }
        
        
        balls.forEach((el, i, ra) => {
          let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
          };
        
          let anim = el.animate(
            [
              { transform: "translate(0, 0)" },
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 1) * 2000, 
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );
        });
        balls.forEach(ball=>{
            document.getElementById('background-wrapper').appendChild(ball);
        });
    },[]);
  return (
    <div className="content">
        <div id="background-wrapper" className="background-wrapper"></div>
      {items.map(item => (
        <div key={item.id} className="item">
          {selectedMenu!=='snacks' && (
            <>
              <div>
                  <img src={item.url} alt={item.name} style={{width:'400px',height:'300px'}} />
              </div> 
              <div className='card-details'>
                  <h3>{item.name}</h3>
                  {selectedMenu !== 'snacks' && (
                    <>
                      <p className='price'>Rs{item.price}</p>
                      {cartItems[item.id] ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px',marginLeft:'125px' }}>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)} 
                        style={{
                          padding: '8px 12px',
                          fontSize: '1.2em',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        -
                      </button>
                      
                      <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>
                        {cartItems[item.id] || 0}
                      </span>
                      
                      <button 
                        onClick={() => handleAddToCart(item)} 
                        style={{
                          padding: '8px 12px',
                          fontSize: '1.2em',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        +
                      </button>
                    </div>
                    
                    ) : (
                      <button className='order' onClick={() => {
                        handleAddToCart(item);
                        addToCart(item);
                      }}>Add To Cart</button>
                    )}
                    </>
                  )}
              </div> 
            </>

          )}
          {selectedMenu==='snacks' && (
            <>
              <div>
                  <button onClick={() => handleItemClick(item.name)} style={{cursor:'pointer'}}><img src={item.url} alt={item.name} style={{width:'390px',height:'300px'}} /></button>
              </div> 
              <div className='card-details'>
                <h3>{item.name}</h3>
              </div>
               
            </>

          )}

        </div>
      ))}
    </div>
  );
};

export default Content;
