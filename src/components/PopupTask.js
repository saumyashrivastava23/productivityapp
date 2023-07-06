import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function PopupTask() {
  return (
    <div>PopupTask
        <div>PopupTimer
        <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <button>Click here</button>
            </Popup>
        </div>
    </div>
    </div>
  )
}

export default PopupTask