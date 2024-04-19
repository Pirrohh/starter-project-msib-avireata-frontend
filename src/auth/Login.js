import React, { useRef, useState } from 'react';
import Form from "../components/Form";


function Login() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Memulai ulang video ketika video selesai
    videoRef.current.play();
  };

  const [user, setUser] = useState('');
  const [authState, setAuthState] = useState(''); 

  return (
    <div className="flex w-full h-screen bg-gray-950">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form setUser={setUser} setAuthState={setAuthState} />
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <video  
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/assets/video/bg2.mp4"
          controls
          autoPlay
          onEnded={handleVideoEnded}>
        </video>
      </div>
    </div>
  );
}

export default Login;
