import LeftNavbar from "../components/asidelayout/LeftNavbar";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto grid gap-4 md:grid-cols-12 pt-16">
        <aside className="col-span-3"><LeftNavbar></LeftNavbar></aside>
        <section className="col-span-6">main</section>
        <aside className="col-span-3">right</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
