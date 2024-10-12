import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <ThreeDots color="#ff0026" height={80} width={80} />
  </div>
);

export default Loader;
