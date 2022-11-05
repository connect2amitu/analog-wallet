import React, { useCallback, useContext, useState } from 'react';

import Toast from './Toast';

interface ToastProviderProps {
  children?: React.ReactNode;
}

const noop = (): void => undefined;

const ToastContext = React.createContext<({show: (message: string) => void})>({ show: noop });
const TOAST_TIMEOUT = 1500;

const ToastProvider = ({ children }: ToastProviderProps): React.ReactElement<ToastProviderProps> => {
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);

  const show = useCallback((message: string): () => void => {
    const timerId = setTimeout(() => setVisible(false), TOAST_TIMEOUT);

    setContent(message);
    setVisible(true);

    return (): void => clearTimeout(timerId);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <Toast
        content={content}
        visible={visible}
      />
    </ToastContext.Provider>
  );
};

export default ToastProvider;

ToastProvider.displayName = 'Toast';


export function useToast (): {show: (message: string) => void} {
  return useContext(ToastContext);
}

