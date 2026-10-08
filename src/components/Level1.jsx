import React, { useState } from 'react';

export default function Level1({ onNext, onReset }) {
  // 💡 틀린 횟수를 기억하는 상태
  const [failCount, setFailCount] = useState(0);
  
  const correctOption = "2026년 7월 31일"; // 실제 날짜 입력

  const handleSelect = (option) => {
    if (option === correctOption) {
      alert("정답!");
      onNext();
    } else {
      // 틀렸을 때 횟수 증가
      const nextFailCount = failCount + 1;

      if (nextFailCount >= 2) {
        // 2번 이상 틀렸을 때 처음 화면(로그인)으로 강제 소환!
        alert("다시~");
        
        // App.jsx에서 넘겨준 초기화 함수가 있다면 실행 (없다면 페이지 새로고침이나 step 0으로 점프)
        if (onReset) {
          onReset();
        } else {
          window.location.reload(); // 가장 확실하게 처음으로 리셋하는 방법
        }
      } else {
        // 1번 틀렸을 때
        alert(`땡! (틀린 횟수: ${nextFailCount}/2)`);
        setFailCount(nextFailCount);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>우리 처음 만난 날은 언제일까여?</h2>
      <p>엣헴</p>
      
      {["2026년 7월 25일","2026년 7월 26일","2026년 7월 27일","2026년 7월 28일","2026년 7월 29일","2026년 7월 30일","2026년 7월 31일","2026년 8월 1일","2026년 8월 2일"].map((date, idx) => (
        <button key={idx} style={styles.btn} onClick={() => handleSelect(date)}>
          {date}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', overflowY: 'auto' },
  btn: { width: '100%', padding: '12px', margin: '6px 0', borderRadius: '15px', border: 'none', backgroundColor: '#fff', fontSize: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', cursor: 'pointer' }
};