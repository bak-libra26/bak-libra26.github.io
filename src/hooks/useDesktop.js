import { useContext } from 'react';
import { DesktopContext } from '../context/DesktopContext.jsx';

const useDesktop = () => {
  const ctx = useContext(DesktopContext);
  if (!ctx) throw new Error('useDesktop must be used within DesktopProvider');
  return ctx;
};

export default useDesktop;
