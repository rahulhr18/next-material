import React from 'react'


export const App: React.FC = ({ children }) => (
  <>
    <div className="main-wrapper" id="main-wrapper">
      {children}
    </div>
  </>
)
