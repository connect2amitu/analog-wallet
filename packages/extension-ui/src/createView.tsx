import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import View from './components/View';

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
      <View>
      <Suspense fallback='...'>
        <Entry />
      </Suspense>
      </View>
    </React.StrictMode>);
}


