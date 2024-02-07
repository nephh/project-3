import React from "react";

export default function DashboardList({ endeavors }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {endeavors.map((item, index) => (
        <div className="mt-4 w-full max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
          <div className="flex items-center justify-between">
            <span className="font-light text-gray-600">{item.community}</span>
          </div>
          <div className="mt-2">
            <a
              href="#"
              className="text-2xl font-bold text-gray-700 hover:underline"
            >
              {item.title}
            </a>
            <p className="mt-2 text-gray-600">{item.content}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
            <div>
              <a href="#" className="flex items-center">
                <h1 className="font-bold text-gray-700 hover:underline">
                  {item.author}
                </h1>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
