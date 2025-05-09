import { useEffect, useState } from 'react';

const DEVICES = ['mobile', 'tablet', 'desktop'] as const;

export type Device = (typeof DEVICES)[number];

export default function useDevice() {
  const [device, setDevice] = useState<Device>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setDevice('mobile');
      else if (window.innerWidth >= 768 && window.innerWidth < 1024) setDevice('tablet');
      else setDevice('desktop');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}
