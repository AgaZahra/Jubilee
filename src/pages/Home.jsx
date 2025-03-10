import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { brands, hero } from '../MockData';
import { Autoplay, Navigation } from 'swiper/modules';
import { useGetProductsQuery } from '../redux/api/productApi';
import SingleCard from '../components/SingleCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  // Get the first 5 products for the favorite section
  const favoriteProducts = products.slice(0, 5);

  return (
    <>
      <section className="hero ">
        <div className="hero-body">
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 20000,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {hero.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="box my-5">
                  <img src={item.image} alt={item.title} />
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

         
        </div>
        <div className="hero-content">
      <h4>THIS WEEK’S HIGHLIGHTS</h4>
      <h1>Woman In Golden Rings And Necklaces</h1>
      <p>Awesome products for the dynamic urban lifestyle</p>
      <button className="btn"><Link to='/shop'>SHOP NOW</Link></button>
    </div>
      </section>

      <section className="brands my-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={5} // 5 markanı eyni anda göstər
          loop={false} 
          touchMove={true}
          autoplay={{
            delay: 30000, // Hər 3 saniyədə bir keçid
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="brand-slide">
                <img src={brand.image} alt={brand.altText} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>








     <section className='offer-banner'>
      <div className="img-box">
        <img src="https://jubilee-demo.myshopify.com/cdn/shop/files/offer-banner-1.jpg?v=1737116523" alt="" />
      </div>
      <div className="offer-content">
      <p>Diamond Bracelets</p>
      <h2>Rose Gold With Diamond
      Hotsell Bracelet</h2>
      <p className='btn'><Link to='/shop'>SHOP NOW</Link></p>
      </div>

     </section>






    










      {/* Favorite Products Section inside Swiper */}
      <section className="favorite-products my-5">
  <h2>Favorite Products</h2>
  <Swiper
    spaceBetween={0}
    slidesPerView={3}
    loop={false}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    navigation={true}
    touchMove={true}
    modules={[Autoplay, Navigation]}
    className="mySwiper"
  >
    {favoriteProducts.map((product) => (
      <SwiperSlide key={product.id}>
        <SingleCard allData={product} />
      </SwiperSlide>
    ))}
  </Swiper>
</section>

    </>
  );
};

export default Home;
