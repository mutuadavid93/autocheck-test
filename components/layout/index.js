import MainNav from "./MainNav";
import SearchNav from "./SearchNav";
import TheFooter from "./TheFooter";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <SearchNav />
      <MainNav />

      <main className="yanga">{children}</main>
      <TheFooter />
    </>
  );
}
