import React, { useEffect, useState } from 'react';

function Snowfall() {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        // Create 30 snowflakes with random properties
        const flakes = Array.from({ length: 25 }, (_, i) => ({
            id: i,
            left: Math.random() * 100, // Random horizontal position (%)
            animationDuration: 5 + Math.random() * 10, // 5-15 seconds
            animationDelay: Math.random() * 5, // 0-5 seconds delay
            size: 2 + Math.random() * 4, // 2-6px
            opacity: 0.3 + Math.random() * 0.7 // 0.3-1.0
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            {snowflakes.map(flake => (
                <div
                    key={flake.id}
                    style={{
                        position: 'absolute',
                        top: '-10px',
                        left: `${flake.left}%`,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        backgroundColor: '#607d8b', // Winter theme color
                        borderRadius: '50%',
                        opacity: flake.opacity,
                        animation: `fall ${flake.animationDuration}s linear ${flake.animationDelay}s infinite`,
                        boxShadow: '0 0 3px rgba(96, 125, 139, 0.5)'
                    }}
                />
            ))}
            <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
          }
        }
      `}</style>
        </div>
    );
}

export default Snowfall;
