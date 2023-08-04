import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Video, { videoProps } from './components/Video';

function App() {
  const [videos,setVideos] = useState<videoProps[]>([
    {
      id: '123-3123-12',
      name: "first video",
      url: "link",
    },
    {
      id: '123-3123-12',
      name: "first video",
      url: "link",
    },
    {
      id: '123-3123-12',
      name: "first video",
      url: "https://www.youtube.com/embed/faE1EGQJ0lQ",
    },
  ])

  return (
    <div className="App">
      <Navbar cor="dark" fonte='letter'/>
      <h1>Videos inscritos</h1>
      <div className='videos-div'>
        
        {
          videos.map(v=><Video key={v.id} {...v}/>)
        }
      </div>
    </div>
  );
}

export default App;
