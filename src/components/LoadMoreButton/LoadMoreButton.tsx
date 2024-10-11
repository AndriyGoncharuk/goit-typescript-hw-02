import styles from "./LoadMoreBtn.module.css";
import React from "react";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
