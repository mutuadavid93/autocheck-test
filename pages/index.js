import MainBody from "../components/MainBody";
import MainBodySlider from "../components/MainBodySlider";

export default function HomePage({ popularMakes }) {
  
  return (
    <>
      <MainBodySlider />
      <MainBody popularmakes={popularMakes} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );
  const payload = await response.json();
  return {
    props: {
      popularMakes: payload
    }
  };
}
