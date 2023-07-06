import React from 'react'

function popup() {
  const openTab = () => {
    // Replace the URL with the desired website you want to open
    const url = 'https://example.com';
    window.open(url, '_blank');
  };
  return (
    <div>popup
    <button onClick={openTab}>
      Open New Tab
    </button>
    </div>
  )
}

export default popup