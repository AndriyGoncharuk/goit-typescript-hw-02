import styles from "./ImageCard.module.css";
import { Image } from "../../types/image";
import React from "react";

type Props = {
  image: Image;
};

const ImageCard: React.FC<Props> = ({ image }) => {
  const { urls, alt_description } = image;

  return (
    <div className={styles.card}>
      <img src={urls.small} alt={alt_description} className={styles.image} />
    </div>
  );
};

export default ImageCard;
