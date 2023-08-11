import React,{useState} from 'react'
import { videoProps } from '../components/Video'
import Video from '../components/Video'

function Videos() {
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
    <div>
       <h1>Videos inscritos</h1>
      <div className='videos-div'>
        
        {
          videos.map(v=><Video key={v.id} {...v}/>)
        }
      </div> 
    </div>
  )
}

export default Videos