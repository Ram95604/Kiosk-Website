// src/components/Content.js

import React, { useEffect } from 'react';
import './content.css';
const Content = ({ items }) => {

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
        
        // Keyframes
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
              duration: (Math.random() + 1) * 2000, // random duration
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
            <div>
            <img src={item.url} alt={item.name} style={{width:'400px',height:'300px'}} />
            </div> 
            <div className='card-details'>
                <h3>{item.name}</h3>
                <p className='price'>Rs{item.price}</p>
                <button className='order'>ADD To Cart</button>

            </div> 

        </div>
      ))}
    </div>
  );
};

export default Content;
