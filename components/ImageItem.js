export default function ImageItem({ item }) {
  return (
    <a href={item.url} data-fancybox="gallery">
      <img src={item.url} alt="" />
    </a>
  );
}
