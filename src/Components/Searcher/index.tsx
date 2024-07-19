import searchImg from "../../assets/Searcher.svg";
import styles from "../../Styles/Components/_searcher.module.scss"

const Searcher = () => {
  return (
    <div className={styles.searcher}>
      <img src={searchImg} alt="sercher"/>
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searcher;