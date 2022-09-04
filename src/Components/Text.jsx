import React, { useEffect, useState } from 'react'

function Text() {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('component mounted');

        return () => console.log('unmounted');
    },[]);


    return (
      <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            <h1>{text}</h1>

    </div>
  )
}

export default Text