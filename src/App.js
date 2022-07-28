import React from 'react'
import {useState, useEffect} from 'react'
import {storage} from './firebase_config'
import {ref, uploadBytes, listAll, getDownloadURL} from '@firebase/storage' 
import {v4} from 'uuid'

function App() {
  const[uploadImage, setUploadImage] = useState(null) 
  const [imageList, setImageList] = useState([])

  const sendImage = () => {
    if(uploadImage === null) return;  
    let imageRef = ref(storage, `images/${uploadImage.name + v4()}`)
    uploadBytes(imageRef, uploadImage).then(() => {
      alert('image uploaded:' + uploadImage.name)
    })

  }
  let imageRef = ref(storage, "images/")

  useEffect(() => {
   listAll(imageRef) 
   .then(res => {
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageList((prev) => [...prev, url])
      })
    })
   })
  }, [])

  return (
    <div>
      <div style={{marginTop: 0}}>
      <input type="file" onChange={(e) => setUploadImage(e.target.files[0])}/> 
      <button onClick={sendImage}>send file</button>
      </div>
      <div style={{marginTop: 20}}>
      {
        imageList.map((url) => {
          return <img src={url} style={{height: 100, width: 100}}/>
        })
      }
      </div>
    </div>
  )
}

export default App
