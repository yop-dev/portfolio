import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorParticles = ({ isActive }) => {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Particle colors that match the website theme
  const particleColors = [
    '#3B82F6', // blue-500
    '#60A5FA', // blue-400
    '#93C5FD', // blue-300
    '#DBEAFE', // blue-100
    '#6366F1', // indigo-500
    '#818CF8', // indigo-400
    '#A5B4FC', // indigo-300
  ];

  const createParticle = useCallback((x, y) => {
    const particle = {
      id: Math.random(),
      x,
      y,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      size: Math.random() * 4 + 2,
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      },
      life: 1,
      decay: Math.random() * 0.02 + 0.01,
    };
    return particle;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isActive) return;
    
    const x = e.clientX;
    const y = e.clientY;
    setMousePosition({ x, y });

    // Create particles on mouse movement
    if (Math.random() < 0.3) { // 30% chance to create particle
      const newParticle = createParticle(x, y);
      setParticles(prev => [...prev.slice(-20), newParticle]); // Keep max 20 particles
    }
  }, [isActive, createParticle]);

  const handleClick = useCallback((e) => {
    if (!isActive) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Create burst of particles on click
    const burstParticles = [];
    for (let i = 0; i < 8; i++) {
      burstParticles.push(createParticle(x, y));
    }
    setParticles(prev => [...prev.slice(-15), ...burstParticles]);
  }, [isActive, createParticle]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, [isActive, handleMouseMove, handleClick]);

  // Update particles
  useEffect(() => {
    if (!isActive || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life - particle.decay,
            velocity: {
              x: particle.velocity.x * 0.98,
              y: particle.velocity.y * 0.98,
            },
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isActive, particles.length]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Cursor trail */}
      <motion.div
        className="absolute w-4 h-4 rounded-full border-2 border-blue-400 border-opacity-60"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      
      {/* Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: 1, 
              opacity: particle.life,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </AnimatePresence>
      
      {/* Subtle glow effect around cursor */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-blue-400 bg-opacity-10 blur-sm"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
        }}
      />
    </div>
  );
};

export default CursorParticles;