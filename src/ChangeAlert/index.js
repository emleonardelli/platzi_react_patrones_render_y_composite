import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({
  show,
  toggleShow,
}) {
  if (!show) return null;
  if (show) {
    return (
      <div>
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