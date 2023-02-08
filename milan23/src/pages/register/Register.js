import './Register.css';
import { useEffect, useRef} from 'react';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';

export default function Register() {

    const cursor = useRef(null);

    useEffect(() => { 
        window.addEventListener('mousemove', (event) => {
        cursor.current.style.backgroundImage = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, transparent, #1E1E1E 30%)`;
        });
    }, []);

    return (
        <div className='imageWrapper'>
            <div className='container' ref={cursor}>
                    <div className="reg">
                        <h1 style={{textAlign: 'center', fontSize: '45px', color: 'azure', fontFamily: 'sans-serif'}}>Sign Up</h1>
                        <div className='regGrid'>
                            <Input placeholder="First Name"/>
                            <Input placeholder="Last Name"/>
                            <Input placeholder="E-Mail"/>
                            <Input placeholder="College"/>
                            <Input placeholder="Password"/>
                            <Input placeholder="Reg No."/>
                            <Input placeholder="Confirm Password"/>
                            <Input placeholder="Contact Number"/>
                        </div>
                        <div className="regButton">
                            <Button value="Register"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}
