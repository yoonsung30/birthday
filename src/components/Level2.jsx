import React, { useState } from 'react';

export default function Level2({ onNext }) {
  // 1, 2, 3, 4 순서대로 눌러야 클리어
  const [nextTarget, setNextTarget] = useState(1);

  const handleTileClick = (num) => {
    if (num === nextTarget) {
      if (num === 4) {
        alert("퍼즐 완성! 사진 속 우리 참 예뻤다 ✨");
        onNext();
      } else {
        setNextTarget(nextTarget + 1);
      }
    } else {
      alert("앗, 그 순서가 아니에요! 1번부터 차례대로 찾아봐요.");
      setNextTarget(1); // 초기화
    }
  };

  return (
    <div style={styles.container}>
      <h2>🧩 보리 맞추기</h2>
      <p>1번부터 4번중에 누가 진짜 보리일까? ㄴㅇㅁㄴㅇ</p>
      <div style={styles.grid}>
        {/* 실제 구현할 때는 여기에 두 분 사진을 4분할해서 넣으면 대박 예쁩니다 */}
        {[3, 1, 4, 2].map((num, idx) => (
          <button key={idx} style={styles.tile} onClick={() => handleTileClick(num)}>
            조각 {num}
          </button>
        ))}
      </div>
      <p style={{marginTop: '20px', color: '#ff69b4'}}>현재 찾아야 할 번호: {nextTarget}번</p>
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', maxWidth: '280px' },
  tile: { height: '120px', backgroundColor: '#ffb6c1', border: 'none', borderRadius: '15px', fontSize: '18px', fontWeight: 'bold', color: '#fff', cursor: 'pointer' }
};