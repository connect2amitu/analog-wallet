// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributor
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Button from './controls/Button';

interface Props {
  children: React.ReactNode;
  className?: string;
  error?: Error | null;
  trigger?: string;
}

interface State {
  error: Error | null;
}

// NOTE: This is the only way to do an error boundary, via extend
class ErrorBoundary extends React.Component<Props> {
  public override state: State = { error: null };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  public override componentDidUpdate(prevProps: Props) {
    const { error } = this.state;
    const { trigger } = this.props;

    if (error !== null && (prevProps.trigger !== trigger)) {
      this.setState({ error: null });
    }
  }

  #goHome = () => {
    this.setState({ error: null });
    window.location.hash = '/';
  };

  public override render(): React.ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    return error
      ? (
        <>
          An error occured
          <div>
            Something went wrong with the query and rendering of this component.
          </div>
          <Button
            onClick={this.#goHome}
          >
            Back to Home
          </Button>
        </>
      )
      : children;
  }
}

export default ErrorBoundary;
