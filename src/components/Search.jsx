import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { setTrackingNumber } from "../features/trackingNumberSlice";
import { Link } from "react-router-dom";
import { setData } from "../features/dataSlice";
import { setIsLoading } from "../features/isLoadingSlice";

const Search = () => {
  const language = useSelector((state) => state.selectedLanguage.value);
  const trackingNumber = useSelector((state) => state.trackingNumber.value);
  const dispatch = useDispatch();
  


  const intl = useIntl();
  const placeholder =
    language === "en"
      ? '"Tracking NO."'
      : intl.formatMessage({ id: "tracking.input" });

  const inputBorder =
    language === "en" ? "rounded-l-xl border-r-0" : "rounded-r-xl border-l-0";
  const searchSpanBorder =
    language === "en" ? "rounded-r-xl border-l-0" : "rounded-l-xl border-r-0";

  const handleInputChange = (e) => {
    dispatch(setTrackingNumber(e.target.value));
  };

  const handleSubmit = async () => {
    try {
      const data = await (
        await fetch(
          `https://tracking.bosta.co/shipments/track/${trackingNumber}`
        )
      ).json();
      dispatch(setData(data));
      dispatch(setIsLoading(false));
 
    } catch (err) {
      
    }
  };

  return (
    <div className="w-[50%] sm:w-[70%] xxs:w-[90%] flex absolute bottom-2">
      <input
        type="text"
        placeholder={placeholder}
        className={`p-[20px] sm:p-[15px] xxs:p-[10px] w-[85%] outline-slate-400 border-slate-300  border-2 ${inputBorder}`}
        onChange={handleInputChange}
        value={trackingNumber}
      />

      <Link
        to="/shipmentDetails"
        className={`bg-[#e30613] p-3 ${searchSpanBorder}`}
        onClick={handleSubmit}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21L28 28"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
          <circle
            cx="13"
            cy="13"
            r="11"
            stroke="white"
            strokeWidth="3"
          ></circle>
        </svg>
      </Link>
    </div>
  );
};

export default Search;
