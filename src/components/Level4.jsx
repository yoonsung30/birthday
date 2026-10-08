import React, { useState, useEffect } from 'react';

export default function Level4() {
  const [text, setText] = useState('');
  const fullText = `사랑하는 우리 00이에게 💖\n\n모든 퀴즈랑 미로를 다 깨고 여기까지 왔네!\n오늘 생일 진심으로 축하하고, 늘 곁에서 예쁜 추억 만들어줘서 고마워.\n\n앞으로도 우리 더 많이 사랑하자! 생일 축하해 우리 공주님 🎂✨`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 80); // 0.08초마다 한 글자씩 출력

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h2>❤️생일축하해❤️</h2>
      <div style={styles.letterBox}>
        <pre style={styles.letterText}>{text}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  letterBox: { width: '100%', height: '450px', backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'left', overflowY: 'auto' },
  letterText: { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'inherit', fontSize: '15px', color: '#333', lineHeight: '1.6' }
};