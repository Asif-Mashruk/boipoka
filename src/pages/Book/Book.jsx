import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId
  } = singleBook;
  console.log(singleBook);

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm  shadow border p-3">
        <figure className="p-6 bg-gray-100 w-2/3 mx-auto ">
          <img className="h-41.5" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by : {publisher}</p>
          <div className="border-2 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
