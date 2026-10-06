 import React, { useState } from 'react';

export default function Level3({ onNext }) {
  // 💡 60개 중 진짜 보물상자 번호 랜덤 뽑기 (0 ~ 59 사이)
  const [realIndex] = useState(() => Math.floor(Math.random() * 60));
  const [message, setMessage] = useState("60개 중에 진짜를 찾아봐라? ㅋㅋㅋ 👀");
  
  // 틀린 횟수 (메시지용으로만 가볍게 활용)
  const [failCount, setFailCount] = useState(0);

  const handleBoxClick = (index) => {
    if (index === realIndex) {
      alert("대박! 60개를 다 뒤져서 진짜를 찾아내다니... 인정! 마지막 편지로 이동합니다 💌");
      onNext();
    } else {
      const nextFailCount = failCount + 1;

      // 킹받는 메시지 (초기화 없이 편하게 계속 도전 가능!)
      const fakeMessages = [
        `여긴 텅 비었지롱~ 😜 (틀린 횟수: ${nextFailCount}번)`,
        `틀렸어! 59개 중에 하나 더 있어 ㅋㅋㅋ (틀린 횟수: ${nextFailCount}번)`,
        `눈 감고 누르나? 거긴 아니야 (틀린 횟수: ${nextFailCount}번)`,
        `설마 여긴 줄 알았어? 오답! 🔥 (틀린 횟수: ${nextFailCount}번)`,
        `아이고 아까워라~ 조심해라 진짜 (틀린 횟수: ${nextFailCount}번)`,
      ];
      const randomMsg = fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
      
      setMessage(randomMsg);
      setFailCount(nextFailCount);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎁 Level 3. 지옥의 60개 보물찾기</h2>
      <p style={styles.subText}>{message}</p>
      
      {/* 60개(6열 x 10행) 빽빽한 보물상자 판 */}
      <div style={styles.playArea}>
        {Array.from({ length: 60 }).map((_, idx) => (
          <button 
            key={idx} 
            style={styles.boxButton} 
            onClick={() => handleBoxClick(idx)}
          >
            🎁
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  subText: { fontSize: '12px', color: '#ff4081', fontWeight: 'bold', minHeight: '30px', marginBottom: '6px' },
  playArea: { 
    width: '100%', 
    maxWidth: '380px',
    height: '450px', 
    backgroundColor: '#fff', 
    borderRadius: '20px', 
    padding: '8px',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // 6열
    gridTemplateRows: 'repeat(10, 1fr)',    // 10행 (총 60개)
    gap: '4px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    overflowY: 'auto'
  },
  boxButton: {
    backgroundColor: '#fff0f5',
    border: '1px solid #ffb6c1',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.1s',
  }
};