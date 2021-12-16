import React from 'react';

function withStorageListener(WrapperComponent) {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (ev) => {
      if (ev.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    })

    const toogleShow = () => {
      props.sincronize();
      setStorageChange(false);
    }

    return (
      <WrapperComponent
        show={storageChange}
        toggleShow={toogleShow}
      />
    )
  };
}

export { withStorageListener }