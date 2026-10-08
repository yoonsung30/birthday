import React, { useState } from 'react';

export default function Level2({ onNext }) {
  // 💡 4개의 보기 중 진짜 보리 사진의 인덱스 (0번부터 3번 중 랜덤으로 1개 지정)
  // 예시: 2번(세 번째 사진)이 정답이라고 가정해 봅시다.
  const correctIndex = 1;

  const handleTileClick = (index) => {
    if (index === correctIndex) {
      alert("정답! ");
      onNext(); // Level 3으로 이동
    } else {
      // 틀렸을 때 경고 팝업 후 처음 화면으로 강제 초기화
      alert("보리가 너 손절한대 첨 부터다시해");
      window.location.reload(); // 처음 로그인 화면으로 리셋
    }
  };

  // 💡 4장의 사진 정보 배열 (실제 사진 경로로 교체해 주세요!)
  const photos = [
    { id: 0, name: "가짜 사진 1", img: "/1.jpg" },
    { id: 1, name: "가짜 사진 2", img: "/bory.jpg" },
    { id: 2, name: "우리 보리 💖", img: "/2.jpg" }, // 👈 이 사진이 진짜 보리라면 인덱스에 맞게 매칭
    { id: 3, name: "가짜 사진 3", img: "/3.jpg" },
  ];

  return (
    <div style={styles.container}>
      <h2>진짜 보리를 찾아바</h2>
      <p style={styles.desc}>네 장의 사진 중 우리 집 <b>'보리'</b> 누구일까요?</p>
      
      <div style={styles.grid}>
        {photos.map((item, idx) => (
          <button 
            key={item.id} 
            style={{
              ...styles.tile,
               backgroundImage: `url(${item.img})`,
               backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} 
            onClick={() => handleTileClick(idx)}
          >
            
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  desc: { fontSize: '13px', color: '#666', marginBottom: '20px', lineHeight: '1.4' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', width: '100%', maxWidth: '300px' },
  tile: { 
    height: '130px', 
    backgroundColor: '#fff0f5', 
    border: '2px solid #ffb6c1', 
    borderRadius: '16px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    color: '#ff4081', 
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.1s'
  }
};