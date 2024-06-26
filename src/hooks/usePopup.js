import { useState, useEffect, useRef, useCallback } from 'react';

function usePopup() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleDocumentClick = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    },
    [ref, setShow]
  );

  const handleGlobalKeydown = useCallback(
    (e) => {
      if (e.key === 'Escape') setShow(false);
    },
    [setShow]
  );

  useEffect(() => {
    if (show) {
      document.addEventListener('click', handleDocumentClick);
      document.addEventListener('keydown', handleGlobalKeydown);
    } else {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleGlobalKeydown);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleGlobalKeydown);
    };
  }, [ref, show, setShow, handleDocumentClick, handleGlobalKeydown]);

  return [ref, show, setShow];
}

export default usePopup;
