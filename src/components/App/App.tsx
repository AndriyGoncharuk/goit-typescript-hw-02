import { useState, useEffect } from "react";
import { getData } from "../../service/getData";
import { Image } from "../../types/image";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreButton/LoadMoreButton";
import ImageModal from "../ImageModal/ImageModal";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(999);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }
      setLoading(true);

      try {
        const { total_pages, results } = await getData(query, page);
        if (!results.length) {
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);

        setTotalPages(total_pages);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {page >= totalPages && (
        <p className={styles.endText}>END OF COLLECTION!!!!</p>
      )}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {showModal && selectedImage && (
        <ImageModal
          isOpen={showModal}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
