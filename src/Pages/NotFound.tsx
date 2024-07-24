import {Link} from "react-router-dom";
import {ThinArrowSvg} from "../Components/SVGC";
import pageNotFound from "../assets/PageNotFound.svg";
import styles from "../Styles/Pages/_cart.module.scss"

const NotFound = () => {
  return (
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
  );
};

export default NotFound;