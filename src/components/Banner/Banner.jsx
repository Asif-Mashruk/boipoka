import React from "react";
import bookImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex justify-around items-center p-4 w-full mx-auto h-200 border-r-8">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bookImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold py-5">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary bg-[#23BE0A]">View the list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
