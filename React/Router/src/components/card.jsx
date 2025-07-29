import React from "react";

function Card({course,btnText="Learn Java",a="https://developer.mozilla.org/en-US/docs/Web/JavaScript"}) {
    console.log("props",course);
    // console.log("props",props.someArr);
    
  return (
    <>
      <div className="flex justify-center items-center h-md max-w-md p-2 bg-red-500 border border-gray-200 rounded-lg shadow-sm dark:bg-red-500 dark:border-gray-700 m-4">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {course}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href={a}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span className="text-white">{btnText}</span>
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
