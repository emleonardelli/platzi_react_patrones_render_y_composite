import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({
  show,
  toggleShow,
}) {
  if (!show) return null;
  if (show) {
    return (
      <div className="ChangeAlert">
        <p>Hubo Cambios</p>
        <button
          onClick={() => toggleShow()}
        >
          Volver a cargar la info
        </button>
      </div>
    )
  }
  
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }