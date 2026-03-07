// import React from "react";
// import './Index.css';
// import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
// import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

// const CatSlider = (props) => {

//     return (
//         <div className="catslidersection mt-4">
//             <div className="container-fluid">

//                 {/* Title Section */}
//                 <div className="featuretitle d-flex align-items-center mb-3">
//                     <h2 className="hd quicksand">Featured Categories</h2>

//                     <div className="catslider-nav ms-auto">
//                         <div className="cat-prev">
//                             <KeyboardArrowLeftOutlinedIcon />
//                         </div>
//                         <div className="cat-next">
//                             <KeyboardArrowRightOutlinedIcon />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Swiper */}
//                 <Swiper
//                     modules={[Navigation, Autoplay]}
//                     navigation={{
//                         nextEl: ".cat-next",
//                         prevEl: ".cat-prev",
//                     }}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     speed={600}
//                     loop={true}
//                     spaceBetween={5}
//                     breakpoints={{
//                         1400: { slidesPerView: 6 },
//                         1200: { slidesPerView: 5 },
//                         1024: { slidesPerView: 4 },
//                         768: { slidesPerView: 3 },
//                         480: { slidesPerView: 2 },
//                         320: { slidesPerView: 2 },
//                     }}
//                     className="catslider-main"
//                 >
//                     {props.data.map((product, i) => (
//                         <SwiperSlide key={i}>
//                             <div className="item">
//                                 <Link to="/products" className="cat-card">
//                                     <div className="info">
//                                         <img src={product.image} alt={product.name} />
//                                     </div>
//                                     <span className="cat-title">
//                                         {product.name}
//                                     </span>
//                                 </Link>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </div>
//         </div>
//     )
// }

// export default CatSlider;

import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const categories = [
  {
    name: "WHEY PROTEIN",
    slug: "Whey%20Protein",
    image: "https://divinityimpex.com/images/product/whey.png"
  },
  {
    name: "CREATINE MONOHYDRATE POWDER",
    slug: "Creatine%20Powder",
    image: "https://divinityimpex.com/images/product/creatine.png"
  },
  {
    name: "OMEGA 3 FISH OIL CAPSULE",
    slug: "Fish%20Oil",
    image: "https://divinityimpex.com/images/product/fish-oil.png"
  },
  {
    name: "BCAA / AMINO ACIDS",
    slug: "BCAA",
    image: "https://divinityimpex.com/images/product/bcaa.png"
  },
  {
    name: "PRE - WORKOUT",
    slug: "Pre%20Workout",
    image: "https://divinityimpex.com/images/product/pre-workout.png"
  },
  {
    name: "TRUE GAIN",
    slug: "True%20Gain",
    image: "https://divinityimpex.com/images/product/true.png"
  }
];

const CategorySection = () => {
  return (
    <section className="category-section-cat">

      <div className="section-header-cat">
        <h2 className="section-title section-cat-title">Shop By Category</h2>
      </div>

      <div className="category-grid-cat">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={`/products?category=${cat.slug}`}
            className="category-card-cat"
          >

            <div className="category-image-cat">
              <img src={cat.image} alt={cat.name} />
            </div>

            <div className="category-title-cat">
              {cat.name}
            </div>

          </Link>
        ))}
      </div>

    </section>
  );
};

export default CategorySection;