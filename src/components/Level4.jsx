import React, { useState, useEffect } from 'react';

export default function Level4() {
  const [text, setText] = useState('');
  const fullText = `안녕 돌맹이 민진아 💖\n\n내가 악필 이여서 이렇게 편지를 써…\n손편지 보다 이게 보기 편할거 같아서,\n나도 이런거 만들어본게 처음이라서, 만들면서 애 좀 먹었어 헤\n근데 또 오히려 이렇게 만들어주는게 더 기억에 남겠지??\n\n생일 축하해 ❤️\n생각지도 못할 때 갑자기 내 옆에 나타나 줘서 고마워\n너랑 있을 때가 거짓말 안치고 제일 행복해,\n나한테는 너가 진짜 선물 같은 사람이야\n\n가끔 다투기도 하고 삐지기도 하고,\n나 때문에 서운한 일도 있지만 나 좋아하고 사랑해줘서 너무너무 고마워 ❤️\n\n선물이 마음에 들지 모르겠다\n너가 목걸이 고등학생 때부터 안 뺐다고 하길래\n아 그럼 나는 너랑 맨날 못 붙어있어도\n내가 준 목걸이는 붙어있을 수 있겠다 생각해서\n내 마음대로 골라봐써 ㅎㅎ\n\n만나면서 처음 맞는 생일인데\n앞으로도 잘 부탁해 ❤️\n앞으로 평생 넌 내꺼야.\n\n태어나줘서 고마워 민진아 ❤️`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 20); // 편지 글이 기니까 타이핑 속도를 살짝 빠르게(0.05초) 조절했습니다!

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <h2>To.내 돌맹이❤️</h2>
      <div style={styles.letterBox}>
        <pre style={styles.letterText}>{text}</pre>
      </div>
    </div>
  );
}

const styles = {
  container: { flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' },
  letterBox: { width: '100%', maxWidth: '380px', height: '480px', backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'left', overflowY: 'auto' },
  letterText: { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'inherit', fontSize: '14px', color: '#333', lineHeight: '1.6' }
};