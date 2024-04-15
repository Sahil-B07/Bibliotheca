import "./book.css";

const Book_3D = ({ book }) => {
  return (
    <div className="scale-[0.7] relative">
      <div className="book-card__cover absolute">
        <div className="book-card__book">
          <div className="book-card__book-front">
            <img
              alt={book.book_title}
              width={100}
              height={100}
              className="book-card__img"
              src={book.book_cover_url.primary}
              onError={(e) => {
                e.target.src = book.book_cover_url.fallback;
              }}
              loading="lazy"
            />
          </div>
          <div className="book-card__book-back"></div>
          <div className="book-card__book-side"></div>
        </div>
      </div>
    </div>
  );
};

export default Book_3D;
