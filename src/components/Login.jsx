import React, { useState } from 'react';

export default function Login({ onNext }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [puppyname, setPuppy] = useState('');

  // 💡 정답 설정
  const correctName = "김윤성"; 
  const correctPhone = "01024376150"; 
  const puppy = '180';

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 공백 제거 및 형식 맞춤 비교
    if (name.trim() === correctName && phone.trim() === correctPhone && puppyname.trim() === puppy) {
      alert("본인 확인 완료! 🎉 생일 주인공 입장하십니다~");
      onNext(); // Level 1로 이동!
    } else {
      alert("누구세요?");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>편지 읽고 싶어??</h2>
      <p style={styles.desc}>이거 다 못맞추면 편지 못보는거야.</p>
      
      <form onSubmit={handleLogin} style={styles.form}>
        <input 
          type="text" 
          placeholder="이름 (내이름)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="password" 
          placeholder="전화번호 (내번호)" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          style={styles.input}
        />
        <input 
          type="text" 
          placeholder="키 (내키)" 
          value={puppyname} 
          onChange={(e) => setPuppy(e.target.value)} 
          style={styles.input}
        />
        <button type="submit" style={styles.button}>입장하기✨</button>
      </form>
    </div>
  );
}

const styles = {

  container: { flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  heading: { 
    color: '#000000', // 예쁜 핑크/레드 계열 컬러
    fontSize: '24px',
    marginBottom: '10px' 
  },
  desc: { fontSize: '14px', color: '#666', marginBottom: '20px', lineHeight: '1.4' },
  form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #ffb6c1', backgroundColor: '#fff', color: '#333', fontSize: '15px', outline: 'none' },
  button: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', backgroundColor: '#ff69b4', color: '#fff', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }
};