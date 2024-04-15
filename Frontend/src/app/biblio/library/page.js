import BooksGallery from "./BooksGallery";
import Carousel from "@/components/Carousel/Carousel";

const Library = () => {
  return (
    <>
      <section className="h-full w-full">
        <Carousel />
        <BooksGallery />
      </section>
    </>
  );
};

export default Library;
