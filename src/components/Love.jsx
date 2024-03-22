import React from "react";
import { ImHeart } from "react-icons/im";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

const Love = () => {
    const language = useSelector(state => state.selectedLanguage.value);
    const monaFont = language === 'en'? 'font-mona' : 'font-monaArabic';

  return (
    <div className="flex flex-col items-center justify-center mt-10 p-2 bg-[#9CAFAA]  text-[#1F1717] sm:text-sm">
      <p>
        <FormattedMessage
          defaultMessage="© 2024 Bosta. All rights reserved."
          id="rights.reserved"
        />
      </p>
      <p>
        <FormattedMessage defaultMessage="Made with" id="made.with" />{" "}
        <ImHeart className="inline text-[#EF5422]" />{" "}
        <FormattedMessage defaultMessage="by" id="by" />{" "}
        <span className={`text-[#EF5422] font-bold text-xl sm:text-lg ${monaFont}`}>
          <FormattedMessage defaultMessage=" Mona." id="mona" />
        </span>
      </p>
    </div>
  );
};

export default Love;
