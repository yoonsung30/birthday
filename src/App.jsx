import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'; // 👈 Level0 대신 Login 임포트!
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import Level4 from './components/Level4';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="mobile-container">
      {step === 0 && <Login onNext={() => setStep(1)} />} {/* 👈 여기서 Login 컴포넌트 렌더링 */}
      {step === 1 && <Level1 onNext={() => setStep(2)} />}
      {step === 2 && <Level2 onNext={() => setStep(3)} />}
      {step === 3 && <Level3 onNext={() => setStep(4)} />}
      {step === 4 && <Level4 />}
    </div>
  );
}

export default App;