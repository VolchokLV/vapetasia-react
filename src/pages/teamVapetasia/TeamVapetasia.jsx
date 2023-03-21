import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./teamVapetasia.css";

const TeamVapetasia = () => {
  const images = [
    "MES_0597.JPG",
    "MES_0598.JPG",
    "MES_0599.JPG",
    "MES_0600.JPG",
    "MES_0601.JPG",
    "MES_0602.JPG",
    "MES_0603.JPG",
    "MES_0604.JPG",
    "MES_0605.JPG",
    "MES_0606.JPG",
    "MES_0610.JPG",
    "MES_0611.JPG",
    "MES_0612.JPG",
    "MES_0613.JPG",
    "MES_0614.JPG",
    "MES_0616.JPG",
    "MES_0619.JPG",
    "MES_0620.JPG",
    "MES_0623.JPG",
    "MES_0626.JPG",
    "MES_0627.JPG",
    "MES_0628.JPG",
    "MES_0629.JPG",
    "MES_0630.JPG",
    "MES_0633.JPG",
    "MES_0634.JPG",
    "MES_0635.JPG",
    "MES_0636.JPG",
    "MES_0637.JPG",
    "MES_0638.JPG",
    "MES_0639.JPG",
    "MES_0640.JPG",
    "MES_0641.JPG",
    "MES_0642.JPG",
    "MES_0643.JPG",
    "MES_0644.JPG",
    "MES_0645.JPG",
    "MES_0646.JPG",
    "MES_0647.JPG",
    "MES_0648.JPG",
    "MES_0650.JPG",
    "MES_0651.JPG",
    "MES_0652.JPG",
    "MES_0653.JPG",
    "MES_0654.JPG",
    "MES_0656.JPG",
    "MES_0657.JPG",
    "MES_0658.JPG",
    "MES_0659.JPG",
    "MES_0661.JPG",
    "MES_0662.JPG",
    "MES_0663.JPG",
    "MES_0664.JPG",
    "MES_0665.JPG",
    "MES_0669.JPG",
    "MES_0670.JPG",
    "MES_0672.JPG",
    "MES_0673.JPG",
    "MES_0674.JPG",
    "MES_0677.JPG",
    "MES_0678.JPG",
    "MES_0679.JPG",
    "MES_0681.JPG",
    "MES_0683.JPG",
    "MES_0684.JPG",
    "MES_0685.JPG",
    "MES_0686.JPG",
    "MES_0687.JPG",
    "MES_0688.JPG",
    "MES_0689.JPG",
    "MES_0429.JPG",
    "MES_0430.JPG",
    "MES_0439.JPG",
    "MES_0443.JPG",
    "MES_0444.JPG",
    "MES_0445.JPG",
    "MES_0448.JPG",
    "MES_0469.JPG",
    "MES_0470.JPG",
    "MES_0471.JPG",
    "MES_0472.JPG",
    "MES_0474.JPG",
    "MES_0475.JPG",
    "MES_0476.JPG",
    "MES_0477.JPG",
    "MES_0479.JPG",
    "MES_0481.JPG",
    "MES_0482.JPG",
    "MES_0484.JPG",
    "MES_0485.JPG",
    "MES_0486.JPG",
    "MES_0487.JPG",
    "MES_0489.JPG",
    "MES_0490.JPG",
    "MES_0491.JPG",
    "MES_0492.JPG",
    "MES_0493.JPG",
    "MES_0494.JPG",
    "MES_0495.JPG",
    "MES_0496.JPG",
    "MES_0497.JPG",
    "MES_0498.JPG",
    "MES_0499.JPG",
    "MES_0500.JPG",
    "MES_0501.JPG",
    "MES_0502.JPG",
    "MES_0503.JPG",
    "MES_0505.JPG",
    "MES_0506.JPG",
    "MES_0507.JPG",
    "MES_0508.JPG",
    "MES_0509 (1).JPG",
    "MES_0509.JPG",
    "MES_0510.JPG",
    "MES_0511.JPG",
    "MES_0512.JPG",
    "MES_0513.JPG",
    "MES_0514.JPG",
    "MES_0515.JPG",
    "MES_0516.JPG",
    "MES_0517.JPG",
    "MES_0518.JPG",
    "MES_0519.JPG",
    "MES_0520.JPG",
    "MES_0521.JPG",
    "MES_0522.JPG",
    "MES_0523.JPG",
    "MES_0524.JPG",
    "MES_0525.JPG",
    "MES_0526.JPG",
    "MES_0527.JPG",
    "MES_0528.JPG",
    "MES_0529.JPG",
    "MES_0530.JPG",
    "MES_0531.JPG",
    "MES_0533.JPG",
    "MES_0534.JPG",
    "MES_0535.JPG",
    "MES_0536.JPG",
    "MES_0537.JPG",
    "MES_0538.JPG",
    "MES_0539.JPG",
    "MES_0540.JPG",
    "MES_0541.JPG",
    "MES_0542.JPG",
    "MES_0543.JPG",
    "MES_0544.JPG",
    "MES_0545.JPG",
    "MES_0546.JPG",
    "MES_0547.JPG",
    "MES_0548.JPG",
    "MES_0549.JPG",
    "MES_0550.JPG",
    "MES_0551.JPG",
    "MES_0552.JPG",
    "MES_0553.JPG",
    "MES_0554.JPG",
    "MES_0555.JPG",
    "MES_0556.JPG",
    "MES_0557.JPG",
    "MES_0558.JPG",
    "MES_0559.JPG",
    "MES_0560.JPG",
    "MES_0561.JPG",
    "MES_0562.JPG",
    "MES_0563.JPG",
    "MES_0565.JPG",
    "MES_0566.JPG",
    "MES_0568.JPG",
    "MES_0569.JPG",
    "MES_0570.JPG",
    "MES_0571.JPG",
    "MES_0596.JPG",
    "MES_0572.JPG",
    "MES_0574.JPG",
    "MES_0575.JPG",
    "MES_0576.JPG",
    "MES_0580.JPG",
    "MES_0581.JPG",
    "MES_0582.JPG",
    "MES_0584.JPG",
    "MES_0586.JPG",
    "MES_0589.JPG",
    "MES_0590.JPG",
    "MES_0591.JPG",
    "MES_0592.JPG",
    "MES_0593.JPG",
    "MES_0594.JPG",
    "MES_0595.JPG",
  ];
  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-b250ce7 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
        data-id="b250ce7"
        data-element_type="section"
      >
        <div className="vapetasia-container vapetasia-column-gap-default ">
          <div className="vapetasia-row ">
            <div
              className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-d64ce97"
              data-id="d64ce97"
              data-element_type="column"
            >
              <div className="vapetasia-column-wrap vapetasia-element-populated">
                <div className="vapetasia-widget-wrap">
                  <div
                    className="vapetasia-element vapetasia-element-6a63206 vapetasia-widget vapetasia-widget-heading"
                    data-id="6a63206"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="vapetasia-widget-container vt-testimonial">
                      <h2 className="vapetasia-heading-title  vapetasia-size-default">
                        Team Vapetasia
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="team-vapetasia">
            <img
              src={"https://cdn2.vapetasia.com/img/team-vapetasia/" + image}
              alt={image.alt}
            />
            <button
              className="team-vapetasia-download"
              onClick={() => handleDownload(image)}
            >
              Download
            </button>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TeamVapetasia;

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "./teamVapetasia.css";

// const TeamVapetasia = () => {
//   const images = [
//     "MES_0597.JPG",
//     "MES_0598.JPG",
//     "MES_0599.JPG",
//     "MES_0600.JPG",
//     "MES_0601.JPG",
//     "MES_0602.JPG",
//     "MES_0603.JPG",
//     "MES_0604.JPG",
//     "MES_0605.JPG",
//     "MES_0606.JPG",
//     "MES_0610.JPG",
//     "MES_0611.JPG",
//     "MES_0612.JPG",
//     "MES_0613.JPG",
//     "MES_0614.JPG",
//     "MES_0616.JPG",
//     "MES_0619.JPG",
//     "MES_0620.JPG",
//     "MES_0623.JPG",
//     "MES_0626.JPG",
//     "MES_0627.JPG",
//     "MES_0628.JPG",
//     "MES_0629.JPG",
//     "MES_0630.JPG",
//     "MES_0633.JPG",
//     "MES_0634.JPG",
//     "MES_0635.JPG",
//     "MES_0636.JPG",
//     "MES_0637.JPG",
//     "MES_0638.JPG",
//     "MES_0639.JPG",
//     "MES_0640.JPG",
//     "MES_0641.JPG",
//     "MES_0642.JPG",
//     "MES_0643.JPG",
//     "MES_0644.JPG",
//     "MES_0645.JPG",
//     "MES_0646.JPG",
//     "MES_0647.JPG",
//     "MES_0648.JPG",
//     "MES_0650.JPG",
//     "MES_0651.JPG",
//     "MES_0652.JPG",
//     "MES_0653.JPG",
//     "MES_0654.JPG",
//     "MES_0656.JPG",
//     "MES_0657.JPG",
//     "MES_0658.JPG",
//     "MES_0659.JPG",
//     "MES_0661.JPG",
//     "MES_0662.JPG",
//     "MES_0663.JPG",
//     "MES_0664.JPG",
//     "MES_0665.JPG",
//     "MES_0669.JPG",
//     "MES_0670.JPG",
//     "MES_0672.JPG",
//     "MES_0673.JPG",
//     "MES_0674.JPG",
//     "MES_0677.JPG",
//     "MES_0678.JPG",
//     "MES_0679.JPG",
//     "MES_0681.JPG",
//     "MES_0683.JPG",
//     "MES_0684.JPG",
//     "MES_0685.JPG",
//     "MES_0686.JPG",
//     "MES_0687.JPG",
//     "MES_0688.JPG",
//     "MES_0689.JPG",
//     "MES_0429.JPG",
//     "MES_0430.JPG",
//     "MES_0439.JPG",
//     "MES_0443.JPG",
//     "MES_0444.JPG",
//     "MES_0445.JPG",
//     "MES_0448.JPG",
//     "MES_0469.JPG",
//     "MES_0470.JPG",
//     "MES_0471.JPG",
//     "MES_0472.JPG",
//     "MES_0474.JPG",
//     "MES_0475.JPG",
//     "MES_0476.JPG",
//     "MES_0477.JPG",
//     "MES_0479.JPG",
//     "MES_0481.JPG",
//     "MES_0482.JPG",
//     "MES_0484.JPG",
//     "MES_0485.JPG",
//     "MES_0486.JPG",
//     "MES_0487.JPG",
//     "MES_0489.JPG",
//     "MES_0490.JPG",
//     "MES_0491.JPG",
//     "MES_0492.JPG",
//     "MES_0493.JPG",
//     "MES_0494.JPG",
//     "MES_0495.JPG",
//     "MES_0496.JPG",
//     "MES_0497.JPG",
//     "MES_0498.JPG",
//     "MES_0499.JPG",
//     "MES_0500.JPG",
//     "MES_0501.JPG",
//     "MES_0502.JPG",
//     "MES_0503.JPG",
//     "MES_0505.JPG",
//     "MES_0506.JPG",
//     "MES_0507.JPG",
//     "MES_0508.JPG",
//     "MES_0509 (1).JPG",
//     "MES_0509.JPG",
//     "MES_0510.JPG",
//     "MES_0511.JPG",
//     "MES_0512.JPG",
//     "MES_0513.JPG",
//     "MES_0514.JPG",
//     "MES_0515.JPG",
//     "MES_0516.JPG",
//     "MES_0517.JPG",
//     "MES_0518.JPG",
//     "MES_0519.JPG",
//     "MES_0520.JPG",
//     "MES_0521.JPG",
//     "MES_0522.JPG",
//     "MES_0523.JPG",
//     "MES_0524.JPG",
//     "MES_0525.JPG",
//     "MES_0526.JPG",
//     "MES_0527.JPG",
//     "MES_0528.JPG",
//     "MES_0529.JPG",
//     "MES_0530.JPG",
//     "MES_0531.JPG",
//     "MES_0533.JPG",
//     "MES_0534.JPG",
//     "MES_0535.JPG",
//     "MES_0536.JPG",
//     "MES_0537.JPG",
//     "MES_0538.JPG",
//     "MES_0539.JPG",
//     "MES_0540.JPG",
//     "MES_0541.JPG",
//     "MES_0542.JPG",
//     "MES_0543.JPG",
//     "MES_0544.JPG",
//     "MES_0545.JPG",
//     "MES_0546.JPG",
//     "MES_0547.JPG",
//     "MES_0548.JPG",
//     "MES_0549.JPG",
//     "MES_0550.JPG",
//     "MES_0551.JPG",
//     "MES_0552.JPG",
//     "MES_0553.JPG",
//     "MES_0554.JPG",
//     "MES_0555.JPG",
//     "MES_0556.JPG",
//     "MES_0557.JPG",
//     "MES_0558.JPG",
//     "MES_0559.JPG",
//     "MES_0560.JPG",
//     "MES_0561.JPG",
//     "MES_0562.JPG",
//     "MES_0563.JPG",
//     "MES_0565.JPG",
//     "MES_0566.JPG",
//     "MES_0568.JPG",
//     "MES_0569.JPG",
//     "MES_0570.JPG",
//     "MES_0571.JPG",
//     "MES_0596.JPG",
//     "MES_0572.JPG",
//     "MES_0574.JPG",
//     "MES_0575.JPG",
//     "MES_0576.JPG",
//     "MES_0580.JPG",
//     "MES_0581.JPG",
//     "MES_0582.JPG",
//     "MES_0584.JPG",
//     "MES_0586.JPG",
//     "MES_0589.JPG",
//     "MES_0590.JPG",
//     "MES_0591.JPG",
//     "MES_0592.JPG",
//     "MES_0593.JPG",
//     "MES_0594.JPG",
//     "MES_0595.JPG",
//   ];

//   return (
//     <>
//       <section
//         className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-b250ce7 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
//         data-id="b250ce7"
//         data-element_type="section"
//       >
//         <div className="vapetasia-container vapetasia-column-gap-default ">
//           <div className="vapetasia-row ">
//             <div
//               className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-d64ce97"
//               data-id="d64ce97"
//               data-element_type="column"
//             >
//               <div className="vapetasia-column-wrap vapetasia-element-populated">
//                 <div className="vapetasia-widget-wrap">
//                   <div
//                     className="vapetasia-element vapetasia-element-6a63206 vapetasia-widget vapetasia-widget-heading"
//                     data-id="6a63206"
//                     data-element_type="widget"
//                     data-widget_type="heading.default"
//                   >
//                     <div className="vapetasia-widget-container vt-testimonial">
//                       <h2 className="vapetasia-heading-title  vapetasia-size-default">
//                         Team Vapetasia
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-1c25a2ea vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default"
//         data-id="1c25a2ea"
//         data-element_type="section"
//       >
//         <div className="vapetasia-row">
//           <div
//             className="vapetasia-column vapetasia-col-100 vapetasia-top-column vapetasia-element vapetasia-element-43fad7f1"
//             data-id="43fad7f1"
//             data-element_type="column"
//           >
//             <div className="vapetasia-column-wrap vapetasia-element-populated">
//               <div className="vapetasia-widget-wrap">
//                 <div
//                   className="vapetasia-element vapetasia-element-1dd462f4 vapetasia-testimonial--skin-default vapetasia-testimonial--layout-image_inline vapetasia-testimonial--align-center vapetasia-arrows-yes vapetasia-pagination-type-bullets vapetasia-widget vapetasia-widget-testimonial-carousel"
//                   data-id="1dd462f4"
//                   data-element_type="widget"
//                   data-settings='{"show_arrows":"yes","pagination":"bullets","speed":500,"autoplay":"yes","autoplay_speed":5000,"loop":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","space_between":{"unit":"px","size":10,"sizes":[]},"space_between_tablet":{"unit":"px","size":10,"sizes":[]},"space_between_mobile":{"unit":"px","size":10,"sizes":[]}}'
//                   data-widget_type="testimonial-carousel.default"
//                 >
//                   <div className="swiper-wrapper vt-carousel ">
//                     <Carousel
//                       emulateTouch={false}
//                       swipeable={true}
//                       showStatus={false}
//                       showThumbs={false}
//                       autoPlay={true}
//                       interval={8000}
//                       showArrows={true}
//                       showIndicators={false}
//                       infiniteLoop={true}
//                       width={1200}
//                     >
//                       {images.map((image, index) => (
//                         <div
//                           key={index}
//                           className="swiper-slide vt-custom-slider-item team-vapetasia"
//                         >
//                           <div className="vapetasia-testimonial">
//                             <div className="vapetasia-testimonial__content">
//                               <img
//                                 className="lazyload"
//                                 src={
//                                   "https://cdn2.vapetasia.com/img/team-vapetasia/" +
//                                   image
//                                 }
//                                 alt={image}
//                               ></img>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </Carousel>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TeamVapetasia;
