import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LandingSection({ title, buttonText, subTitle }) {
    return(
        <div>

            <h2>{title}</h2>

            <span>{subTitle}</span>

              <div>

                <Link to="/shop">{buttonText}</Link>

              </div>

        </div>
    )
}

LandingSection.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonText: PropTypes.string,
  };

export default LandingSection;