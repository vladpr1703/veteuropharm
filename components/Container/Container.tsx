import type { ContainerProps } from './types';
import styles from './styles.module.scss';

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={[styles.container, className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
