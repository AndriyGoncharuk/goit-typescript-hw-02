import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { Image } from "../../types/image";
import React from "react";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
};

Modal.setAppElement("#root");

const ImageModal: React.FC<Props> = ({ isOpen, onRequestClose, image }) => {
  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <img
          src={urls.regular}
          alt={alt_description}
          className={styles.image}
        />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onRequestClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
