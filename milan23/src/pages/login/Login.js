import './Login.css';
import { useEffect, useRef} from 'react';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';


function Login() {

  const cursor = useRef(null);

  useEffect(() => { 
    window.addEventListener('mousemove', (event) => {
      cursor.current.style.backgroundImage = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, transparent, #1E1E1E 30%)`;
    });
  }, []);

  return (
    <div className='imageWrapper'>
      <div className='container' ref={cursor}>
        <div className="loginWrapper">
          <div className="login">
            <h1 style={{textAlign: 'center', fontSize: '45px', color: 'azure', fontFamily: 'sans-serif'}}>Login</h1>
            <Input placeholder="E-Mail"/><br />
            <Input placeholder="Password"/><br />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./" style={{color: '#888888', fontFamily: 'sans-serif', fontSize: '15px'}}>forgot password?</a></p>
            <div className="loginButton">
              <Button value="LOGIN"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
