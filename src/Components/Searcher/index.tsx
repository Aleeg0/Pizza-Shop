import searchImg from "../../assets/Searcher.svg";

const Searcher = () => {
  return (
    <div className="searcher">
      <img src={searchImg} alt="sercher"/>
      <input
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searcher;