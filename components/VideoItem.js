export default function VideItem({ item }) {
  return (
    <div>
      <a
        data-fancybox="gallery"
        data-width="640"
        data-height="360"
        href={item.url}
      >
        <video src={item.url} style={{ height: "270px", width: "250px" }}></video>
      </a>
    </div>
  );
}
