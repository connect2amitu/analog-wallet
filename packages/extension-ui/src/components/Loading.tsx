import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children?: React.ReactNode;
}

export default function Loading({ children }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  if (!children) {
    return (
      <div>{t<string>('loading ...')}</div>
    );
  }

  return (
    <>{children}</>
  );
}
