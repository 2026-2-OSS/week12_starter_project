import { useEffect, useState } from 'react';
import formatTimerTime from './formatTimerTime.js';

// LAB 1 (Slide 07): useEffect Timer
export default function Lab1EffectTimer() {
  const [count, setCount] = useState(0);
  console.log('[LAB 1] rendered');

  useEffect(() => {
    console.log('[LAB 1] effect started');
    const timerId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
      console.log('[LAB 1] cleanup');
    };
  }, []);

  return (
    <div>
      <p className="hint">Count는 1초마다 자동으로 증가합니다.</p>
      <div className="count">{formatTimerTime(count)}</div>
      <p className="hint">Console에서 Render / Effect / Cleanup을 비교하세요.</p>
    </div>
  );
}
