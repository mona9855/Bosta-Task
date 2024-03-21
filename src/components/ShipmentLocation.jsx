import React from 'react'
import questionsImg from '../assets/questions.png';
import { FormattedMessage } from 'react-intl';
import { apiArabicData } from '../translations/apiArabicData';
import { useSelector } from 'react-redux';

const ShipmentLocation = () => {
    const language = useSelector(state => state.selectedLanguage.value);

  return (
    <div className='flex flex-col gap-3 lg:mt-5'>
      <h1 className='font-bold'>
        <FormattedMessage defaultMessage="Shipment Location" id='location'/>
      </h1>
      <div className='bg-slate-200 p-5 rounded-xl border-2 lg:w-[50%]'>
        <p>{language === 'en'? 'Cairo Sorting Facility' : apiArabicData[1].hub}</p>
      </div>
      <div className='flex p-5 rounded-xl border-2 border-slate-200 lg:w-[50%] md:flex-col'>
        <div>
          <img src={questionsImg} alt="logo" />
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='xl:text-base lg:text-xs md:text-sm sm:text:xs'>
            <FormattedMessage defaultMessage="Do you have any issues with your shipment ?!" id='questions'/>
          </p>
          <button className='text-white py-2 px-3 bg-[#b80b0b] rounded-xl md:text-sm sm:text:xs'>
            <FormattedMessage defaultMessage="Report issue" id='report'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShipmentLocation