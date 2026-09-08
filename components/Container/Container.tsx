import type { ContainerProps } from "./types";
import styles from "./styles.module.scss";

export const Container = ({ className, ...props }: ContainerProps) => (
  <div
    className={[styles.container, className].filter(Boolean).join(" ")}
    {...props}
  />
);
