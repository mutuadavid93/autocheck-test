import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(import("react-owl-carousel"), {
//   ssr: false
// });

import OwlCarousel from "react-owl-carousel";

export default function Carousel({ carmedia }) {
  let mediaFile = null;
  if (carmedia.hasOwnProperty("carMediaList")) {
    const [mediaType] = carmedia.carMediaList[0].type.split("/");

    if (mediaType == "video") {
      console.log("--- VIDEO ");
    } else {
      console.log("--- IMAGE ");
    }
  }

  if (!carmedia.hasOwnProperty("carMediaList")) return <p>Loading...</p>;

  return (
    <OwlCarousel
      loop={false}
      rewind
      margin={10}
      lazyLoad
      center
      className="owl-carousel owl-theme"
      id="media-slider"
    >
      {carmedia.carMediaList.map((li) => {
        return (
          <div className="item-video" key={li.id}>
            <img
              className="owl-lazy"
              src="https://storage.googleapis.com/img.autochek.africa/a1dfa654-d52c-4931-89eb-33b72442aa7d-IMG.jpg"
              alt=""
            />
          </div>
        );
      })}
    </OwlCarousel>
  );
}
