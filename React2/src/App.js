import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//1. 이벤트버블링 해결
//2. 입력창에 내용을 영화 리스트 맨 위에 사입
//3. 영화 제목마다 삭제 버튼 만들어 삭제하기
//4. 좋아요가 각자 영화에 따라 증가하기
//5. 모달창에 닫기 버튼을 만들어 누르면 모달창 닫기

function App() {
  // let post = "찬실이는 복도 많지!"
  // document.querySelectorAll('h4')[0].innerHTML = post;

  //useState
  // let [제목1, b1] =useState('찬실이는 복도 많지');
  // let [제목2, b2] =useState('내 서랍 속에 행복');
  // let [제목3, b3] =useState('컴온컴온');

  //useState 여러개의 값 한 줄에 쓰기
  let[제목들, 제목변경] = useState (['찬실이는 복도 많지', '내 서랍 속에 행복', '컴온컴온']);
  let[like, setLike] = useState([0,0,0]);
  // useState값이 true라면 modal이 보인다
  let[modal, setModal] = useState(false);
  //동적 UI를 만들기 위해서는 현재 UI 상태를 state에 저장해 두어야 한다.
  let[title, setTitle] = useState(0);  //0이면 0번째 제목, 1이면 1번째 제목, 2이면 2번째 제목
  //사용자가 입력내용을 저장하는 변수
  let[user, setUser] = useState('')

  // [1,2,3,4,5].map(function(a){
  //   console.log(a)
  // })
  
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

      <button onClick={() => {
        let copy2 = [...제목들];
        copy2.sort();
        제목변경(copy2);
      }}> 제목정렬</button>

      {/* <div className = "list">
        <h4>{제목들[0]}<span class = 'cursor' onClick={() => {likeAdd(like+1)}}> 👍</span>{like}</h4>
        <p>4월 18일</p>
      </div>

      <div className = "list">

주석 여기부터
                <h4 onClick={() => {setModal(true)}} class = 'cursor'>
                모달의 현재 값을 반전 시켜야 하니까 ! 사용
여기까지
        <h4 onClick={() => {setModal(!modal)}} class = 'cursor'> {제목들[1]} </h4>
        <p>4월 18일</p>
      </div>

      <div className = "list">
        <h4>{제목들[2]}<span class = 'cursor' onClick={() => {likeAdd(like+1)}}> 👍</span>{like}</h4>
        <p>4월 18일</p>
      </div> */}

      {/* Modal호출 */}
      {/* <Modal></Modal> */}
      {/* 짧게 쓰고 싶을 때 */}
      {/* <Modal/> */}
      {
        // modal == true ? <Modal/> : null
      }

      {/* map함수 사용 : 반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장 함수인 map()를 사용*/}

      {/* 제목이 1, 2, 3으로 출력됨 */}
      {/* {
        [1,2,3].map(function(e){
          return(
            <div className = "list">
              <h4> {e} </h4>
              <p>4월 18일</p>
            </div>
          )
        })
      } */}

      {/* 방법1 */}
      {/* {
        제목들.map(function(e){
          return(
            <div className = "list">
              <h4> {e} </h4>
              <p>4월 18일</p>
            </div>
          )
        })
      } */}

      {/* 방법2 */}
      {
        제목들.map(function(e, i){
          return(
            <div className = "list">
              <h4 onClick={()=>{setModal(true); setTitle(i) }} class = 'cursor'> {제목들[i]}
              <span onClick={(e) => {e.stopPropagation();
                let copy6 = [...like];
                copy6[i] = copy6[i] = + 1;
                setLike(copy6)}}>👍</span>{like[i]}</h4>
              <p>4월 18일</p>
              <button onClick={()=>{
                let copy4 = [...제목들];
                copy4.splice(i,1);  //splice: 삭제
                제목변경(copy4);
              }}>삭제</button>
            </div>
          )
        })
      }

      {/* <input type = "text" onChange={(e)=>{console.log(e.target.value)}}></input> */}
      <input type = "text" onChange={(e)=>{setUser(e.target.value)}}></input>
      <button onClick={() => {
        let copy3 = [...제목들];
        copy3.unshift(user);  //unshift: 추가
        // 위에 코드는 새로운 영화 제목을 위에 추가하는 코드 / copy3[0] = user; 이 코드는 0번 방의 영화 제목을 바꾸는 코드
        제목변경(copy3);
      }}>발행</button>

      {
        modal == true ? <Modal index={title} 제목변경1={제목변경} setModal1 = {setModal} color="pink" title1={제목들}/> : null  //값을 지정해주는 부분(자식에서 props로 받아서 활용한다.)
      }

    </div>
  );
} //App끝남

// 컴포넌트
function Modal(props){  //부모인 App에서 선언한 '제목들'을 가져오기 위해 props 사용
  return(
    //<></>는 <div> 태그의 줄임
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{props.title1[props.index]}</h4>
        {/*<h4>{제목들[0]}</h4>*/}
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.제목변경1(['라이프잇셀프', '벌새', '라이스보이'])}}>글 수정</button>
        <button onClick={() => {props.setModal1(false);}}>닫기</button>
      </div>
    </>
  )

}

export default App;
