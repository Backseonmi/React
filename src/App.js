import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let post = "찬실이는 복도 많지!"
  // document.querySelectorAll('h4')[0].innerHTML = post;

  //useState
  // let [제목1, b1] =useState('찬실이는 복도 많지');
  // let [제목2, b2] =useState('내 서랍 속에 행복');
  // let [제목3, b3] =useState('컴온컴온');

  //useState 여러개의 값 한 줄에 쓰기
  let[제목들, 제목변경] = useState (['찬실이는 복도 많지', '내 서랍 속에 행복', '컴온컴온']);
  let[like, likeAdd] = useState(0);
  
  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style = {{color:'aqua', fontsize : '22px'}}> 힐링영화 </h4>
      </div>

      <button onClick={() => {
        let copy1 = [...제목들];
        copy1[0] = '벌새';
        // copy1[1] = '타이타닉';
        // copy1[2] = '슬램덩크';
        제목변경(copy1);
      }}> 신규영화</button>

      <div className = "list">
        <h4>{제목들[0]}<span class = 'cursor' onClick={() => {likeAdd(like+1)}}> 👍</span>{like}</h4>
        <p>4월 18일</p>
      </div>

      <div className = "list">
        <h4>{제목들[1]}<span class = 'cursor' onClick={() => {likeAdd(like+1)}}> 👍</span>{like}</h4>
        <p>4월 18일</p>
      </div>

      <div className = "list">
        <h4>{제목들[2]}<span class = 'cursor' onClick={() => {likeAdd(like+1)}}> 👍</span>{like}</h4>
        <p>4월 18일</p>
      </div>
    </div>
  );
}

export default App;
