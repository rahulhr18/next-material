import React from 'react'
import {useState} from 'React'
import 'bootstrap/dist/css/bootstrap.min.css';


function App<Props>({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<Props>
  pageProps: Props
}): React.ReactElement {
  return (
    <>
        {/* <style global jsx>
          {`
            @font-face {
              font-family: 'Arial';
              src: url('path_to_font');
            }
            
          `}
        </style> */}
        <Component {...pageProps} />
        
    </>
  )
}

export default App
