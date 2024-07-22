import Header from "../Components/Header";
import pageNotFound from "../assets/PageNotFound.svg";
import {Link} from "react-router-dom";
import ThinArrowSvg from "../Components/SVGS/ThinArrowSvg.tsx";
import styles from "../Styles/Components/_cart.module.scss"

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className={styles.notFound}>
        <h1>Page Not Found 😢</h1>
        <p>
          It looks like you've gone to a non-existent page!
          To order a pizza, go to the main page.
        </p>
        <img src={pageNotFound} alt="emptyCart"/>
        <Link to="/">
          <button
            className={styles.goBackBtn}
          >
            <ThinArrowSvg/>
            Go back
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;