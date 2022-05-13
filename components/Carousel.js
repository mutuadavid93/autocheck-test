import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import ImageItem from "./ImageItem";
import VideoItem from "./VideoItem";
import Fancybox from "./FancyBox";

export default function Carousel({ carmedia }) {
  if (!carmedia.hasOwnProperty("carMediaList")) return <p>No Media Found</p>;

  return (
    <OwlCarousel
      loop={false}
      responsiveRefreshRate={0}
      autoplay
      autoplayTimeout={7000}
      autoplayHoverPause
      nav
      navText={[
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
      ]}
      dots
      margin={20}
      className="owl-carousel owl-theme"
      id="media-slider"
    >
      {carmedia?.carMediaList &&
        carmedia?.carMediaList?.map((item, i) => {
          const [mediaType] = item.type.split("/");
          return (
            <Fancybox options={{ infinite: false }} key={item.id}>
              {mediaType == "video" ? (
                <VideoItem item={item} />
              ) : (
                <ImageItem item={item} />
              )}
            </Fancybox>
          );
        })}
    </OwlCarousel>
  );
}
