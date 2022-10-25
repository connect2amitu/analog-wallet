import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

export default function createView(Entry: React.ComponentType, rootId = 'root'): void {
  const rootElement = document.getElementById(rootId);

  if (!rootElement) {
    throw new Error(`Unable to find element with id '${rootId}'`);
  }

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <Suspense fallback='...'>
        <Entry />
      </Suspense>
    </React.StrictMode>);
}


