import dr from "../assets/dr.png"
import star from "../assets/star.png"
import Frame from "../assets/Frame.png"
import scholar from "../assets/scholar.png"
import msg from "../assets/msg.png"
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination ,Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Cards = () => {
    return (
        <>
                {/* Container for Swiper component */}

        <div className=" flex justify-center items-center py-20 space-x-6 ">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 5,
                  stretch: 0,
                  depth: 190,
                  modifier: 3,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                initialSlide={3}
                modules={[EffectCoverflow, Pagination,Navigation ]}
          

        >
             {/* Individual Swiper slides */}
             <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }} >
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star" />
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame}   alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg}  alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star" />
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame}  alt="frame"/>
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar}  alt="scholar"/>
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg}  alt="msg"/>
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star"/>
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star"/>
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star"/>
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star"/>
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                 {/* Individual Swiper slides */}
                <SwiperSlide style={{ width: 'auto', maxWidth: '24rem' }}>
                <div className='bg-[#FFF7E2] w-[24rem] flex flex-col justify-center items-center py-10 rounded-xl shadow-lg border-2 border-gray-100'>
                    <span className="flex justify-center items-center z-1 h-2/4 w-2/4">
                        <img src={dr} alt="dr" className="h-full w-full" />
                    </span>
                    <div className='flex justify-center items-center space-x-1 bg-black rounded-full w-20 z-5 -mt-4 text-white'>
                        <span>
                            4.5
                        </span>
                        <span>
                            <img src={star} alt="star"/>
                        </span>
                    </div>
                    <p className="text-3xl font-medium tracking-wide my-3">Dr.Prerna Narang</p>
                    <div className="flex flex-col items-start space-y-2">
                        <p className="flex justify-center items-center space-x-4">
                            <span>
                                <img src={Frame} alt="frame" />
                            </span>
                            <span>
                                Male-Female Infertility
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-2">
                            <span>
                                <img src={scholar} alt="scholar" />
                            </span>
                            <span>
                                7 years of Experience
                            </span>
                        </p>
                        <p className="flex justify-center items-center space-x-3">
                            <span>
                                <img src={msg} alt="msg" />
                            </span>
                            <span>
                                Speaks: English, Hindi, Marathi
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3 mt-3'>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Video Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                ₹800
                            </span>
                        </div>
                        <div className="flex flex-col items-center my-2 border-2 border-[#3A643B] border-opacity-35 p-2 rounded-lg">
                            <span>
                                Chat Consultation
                            </span>
                            <span className="text-[#3A643B] font-medium">
                                Free
                            </span>
                        </div>
                    </div>
                    <Link to="/profile"> <button className="mt-3 bg-white border-2 border-[#3A643B] py-3 w-[22rem] text-[#3A643B] font-medium rounded-lg">View Profile</button> </Link>
                    <button className="mt-3 border-2 bg-[#3A643B] py-3 w-[22rem] text-white font-medium rounded-lg">Book a consultation</button>
                </div>
                </SwiperSlide>
                </Swiper>
                </div>
        </>
    )
}

export default Cards