import { useState, useEffect } from 'react';
import { getStorageRef } from '../../Firebase/firebase';


function useImgRef(urlImg) {
  const [imgRef, setImgRef] = useState(null);

  useEffect(() => {
    const storageRef = getStorageRef();
    const finalRef = storageRef.child(urlImg);
    finalRef.getDownloadURL().then((URL) => {
        setImgRef(URL);
    })

  });

  return imgRef;
}

export default useImgRef;


