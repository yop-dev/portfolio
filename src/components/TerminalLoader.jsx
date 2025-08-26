import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalLoader = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const terminalLines = [
    { text: "$ initializing portfolio...", delay: 150 },
    { text: "$ loading components...", delay: 150 },
    { text: "$ fetching projects data...", delay: 150 },
    { text: "$ setting up animations...", delay: 150 },
    { text: "$ portfolio ready!", delay: 200 },
    { text: "$ welcome to joner's portfolio", delay: 300 }
  ];

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 300);
      }, 200);
      return;
    }

    const currentLineText = terminalLines[currentLine].text;
    const lineDelay = terminalLines[currentLine].delay;

    if (currentChar < currentLineText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 20); // Faster typing speed

      return () => clearTimeout(timeout);
    } else {
      // Line complete, move to next line after delay
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, lineDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center font-mono p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-2xl">
            {/* Terminal Header */}
            <motion.div
              className="bg-gray-800 rounded-t-lg p-2 sm:p-3 flex items-center space-x-1.5 sm:space-x-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4">terminal</span>
            </motion.div>

            {/* Terminal Body */}
            <motion.div
              className="bg-gray-900 rounded-b-lg p-3 sm:p-4 md:p-6 min-h-[250px] sm:min-h-[300px]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Terminal Lines */}
              <div className="space-y-1 sm:space-y-2">
                {terminalLines.slice(0, currentLine + 1).map((line, index) => (
                  <motion.div
                    key={index}
                    className="text-green-400 text-xs sm:text-sm md:text-base break-words"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === currentLine ? (
                      <span>
                        {line.text.slice(0, currentChar)}
                        {showCursor && index === currentLine && (
                          <span className="bg-green-400 text-gray-900 animate-pulse">_</span>
                        )}
                      </span>
                    ) : (
                      <span>{line.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Loading Progress Bar */}
              <motion.div
                className="mt-4 sm:mt-6 md:mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentLine >= 2 ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-blue-400 text-xs sm:text-sm mb-1 sm:mb-2">Loading progress:</div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-1.5 sm:h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${Math.min((currentLine / (terminalLines.length - 1)) * 100, 100)}%` 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {Math.min(Math.round((currentLine / (terminalLines.length - 1)) * 100), 100)}% complete
                </div>
              </motion.div>

              {/* ASCII Art */}
              {currentLine >= terminalLines.length - 1 && (
                <motion.div
                  className="mt-3 sm:mt-4 md:mt-6 text-blue-400 text-xs leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {/* Mobile ASCII Art */}
                  <div className="block sm:hidden text-center">
                    <pre className="text-xs">
{`  ____   ____  ____  ______
 / __ \\ / __ \\/ __ \\/_  __/
/ /_/ // / / / /_/ / / /   
\\____//_/ /_/\\____/ /_/    
                          
PORTFOLIO`}
                    </pre>
                  </div>
                  
                  {/* Desktop ASCII Art */}
                  <div className="hidden sm:block text-center">
                    <pre className="text-xs sm:text-xs md:text-sm">
{`    ____  ____  ____  ______________________  __    __________ 
   / __ \\/ __ \\/ __ \\/_  __/ ____/ __ \\/ /  /  |/  /  _/ ____/
  / /_/ / / / / /_/ / / / / /_  / / / / /  / /|_/ // // /     
 / ____/ /_/ / _, _/ / / / __/ / /_/ / /  / /  / // // /___   
/_/    \\____/_/ |_| /_/ /_/    \\____/_/  /_/  /_/___/\\____/   `}
                    </pre>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalLoader;