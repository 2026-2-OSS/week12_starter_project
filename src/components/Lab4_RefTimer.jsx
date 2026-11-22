import { useEffect, useRef, useState } from 'react';
import formatTimerTime from './formatTimerTime.js';

// LAB 4 (Slide 17): Timer ID를 useRef로 관리
export default function Lab4RefTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setRunning(true);
  };

  const stop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setRunning(false);
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <p className="status">상태: {running ? 'Running' : 'Stopped'}</p>
      <div className="count">{formatTimerTime(count)}</div>
      <div className="controls">
        <button onClick={start} disabled={running}>Start</button>
        <button className="secondary" onClick={stop} disabled={!running}>Stop</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">Timer ID는 ref에 저장하고, 실행 상태는 화면 표시를 위해 state로 관리합니다.</p>
    </div>
  );
}
