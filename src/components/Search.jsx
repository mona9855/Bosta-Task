import { useSnapshot } from "valtio";
import state from "../store";
import { useIntl } from "react-intl";

const Search = () => {
  const snap = useSnapshot(state);


  const intl = useIntl();
  const placeholder =
    snap.selectedLanguage === "en"
      ? '"Tracking NO."'
      : intl.formatMessage({ id: "tracking.input" });

  const inputBorder =
    snap.selectedLanguage === "en"
      ? "rounded-l-xl border-r-0"
      : "rounded-r-xl border-l-0";
  const searchSpanBorder =
    snap.selectedLanguage === "en"
      ? "rounded-r-xl border-l-0"
      : "rounded-l-xl border-r-0";


    const handleInputChange = (e) => {
      state.trackingNumber = e.target.value;
    }


  return (
    <div className="w-[50%] sm:w-[70%] xxs:w-[90%] flex absolute bottom-1">
      <input
        type="text"
        placeholder={placeholder}
        className={`p-[20px] sm:p-[15px] xxs:p-[10px] w-[85%] outline-slate-400 border-slate-300  border-2 ${inputBorder}`}
        onChange={handleInputChange}
        value={snap.trackingNumber}
      />

      <a
        href="/shipmentDetails"
        className={`bg-[#e30613] p-3 ${searchSpanBorder}`}
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
      </a>
    </div>
  );
};

export default Search;
