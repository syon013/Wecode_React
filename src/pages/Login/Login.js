import React from "react";
import "./Login.css";
import mainLogo from "../../assets/img/Logo.png";

const Login = () => {

  return (
    <div className="Login">

      <div className="Splash">
        {/* <img className="logo" src="img/Logo.png" alt="logo" /> */}
        <img className="Logo" src={mainLogo} alt="logo" />
        <img className="logo_wecode" src="img/logo_wecode.png" alt="Logo2" />
      </div> 

      <div className="container">

        <div class="Input">
          <input className="textInput_lv1" type="text" placeholder="이메일" />
          <input className="textInput_lv1" type="password" placeholder="비밀번호" />
        </div>

        <button className="Button_fill">
          <span>로그인</span>
        </button>

        <div className="login_option">
          <a href="#">회원 가입</a> 
          {/* <span style={{ cursor: 'pointer'}}  onClick={() => console.log('회원가입으로 이동')}>회원 가입</span> */}
          <div></div>
          <a href="#">비밀번호 찾기</a>
          {/* <span style={{ cursor: 'pointer'}}  onClick={() => console.log('비밀번호 찾기로 이동')}>비밀번호 찾기</span> */}
        </div>
        
      </div>
    </div>
  );
};

export default Login;
