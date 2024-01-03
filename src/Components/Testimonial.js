import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
import data from '../utils.js/testimonials';

export default function Testimonials(){
    return(
        <div className=" pt-40 px-12 flex flex-col gap-16 " >
            <div className='flex flex-col gap-3'>
                <div className='flex justify-center'>
                    <p className="bg-gray-200 inline px-4 py-1 rounded-2xl font-medium">They already love our products😍</p>
                </div>
                <div className='flex justify-center'>
                    <p className='text-6xl font-bold'>See what our users say about us</p>
                </div>

            </div>

            <div>
                <Swiper
        
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'4'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                        
                    }}
                    //pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                    autoplay ={{delay:1800,
                                    disableOnInteraction: false,
                                    
                                }}
                                
                >
                    {data.map(user => (
                        <SwiperSlide key={user.id}>
                            <div className=' bg-white rounded-3xl border-2  p-4 scale-75' >
                                <div className='flex flex-col gap-1'>
                                    <div className='flex justify-center'>
                                        <img className=" justify-center drop-shadow-2xl"src={user.img}></img>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p className='text-black font-semibold'>{user.remark}</p>
                                    </div>
                                    <div className='flex justify-center'>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>

                                    <div className='flex justify-center'>
                                        <p className='text-gray-600 text-center'>{user.testimonial}</p>
                                    </div>

                                    <div className='flex justify-center'>
                                        <p className='text-black font-medium'>{user.author}</p>

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
        
        
                </Swiper>
            </div>
        </div>
    
    )
}