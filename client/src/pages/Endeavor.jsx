import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_ENDEAVOR } from "../utils/queries";
import { useState, useEffect } from "react";

export default function Endeavor() {
  const { endeavorId } = useParams();
  console.log(endeavorId);
  const { loading, data } = useQuery(QUERY_SINGLE_ENDEAVOR, {
    variables: { endeavorId: endeavorId },
  });
  console.log(endeavorId);
  console.log(data);

  const endeavor = data?.endeavor || [];
  const users = endeavor?.users || [];
  console.log(endeavor.title);
  console.log(endeavor.image);

  // ADD FUNCTIONALITY FOR PROGRESS BAR
  const [funding, setFunding] = useState(5);

  const handleChange = (event) => {
    setFunding((funding) => {
      funding + 5;
    });
  };

  const handleGoBack = () => {
    window.history.back(); // Navigate back to the previous route
  };

  const handleGoToStripe = () => {
    window.location.assign("https://buy.stripe.com/test_4gw01gcA85GO8jC3cc");
  };

  return (
    <div className="mx-auto flex h-screen flex-col items-center">
      {/* name of endeavor and description */}
      <div className="px-auto w-11/12 md:w-8/12">
        <div className="">
          <div className="mt-4">
            <h1 className="py-2 text-center text-3xl font-bold text-zinc-200 lg:text-4xl">
              Endeavor
            </h1>
            <button
              onClick={handleGoBack}
              className="text-l mb-2 rounded bg-indigo-500 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
            >
              Back
            </button>
            {/* card div */}
            <div className="flex justify-center ">
              {/* Image */}
              <img
                className="my-4 flex h-[200px] w-[200px] items-center justify-center rounded-full object-cover"
                src={`/images/${endeavor.image}`}
                alt="endeavor image"
              />
            </div>
            <div className="mx-auto mt-4 rounded-lg bg-zinc-900 bg-opacity-75 px-8 py-3 shadow-md">
              <div className="mx-auto flex items-center justify-center py-4">
                <h1 className="px-2 text-3xl font-bold text-white">
                  {endeavor.title}
                </h1>
              </div>
              <div className="mt-2">
                <p className="mt-2 px-3 py-3 text-xl text-zinc-300">
                  {endeavor.content}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                {/* Contributors Div */}
                <div className="mt-2 max-w-4xl px-10 py-6">
                  <p className="py-1">Author: {endeavor.author}</p>
                  <h2 className="text-2xl font-bold text-zinc-500">
                    {endeavor.userCount} Active Users
                  </h2>
                  <ul className="-mx-2 flex flex-wrap py-4">
                    {users.map((user, index) => (
                      <li
                        key={index}
                        className="mx-2 my-2 overflow-hidden rounded-lg bg-rose-900 px-3 py-2 shadow-md"
                      >
                        {user.username}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Join Endeavor btn, not functional */}
                <button className="text-l rounded px-3 py-2 font-bold text-zinc-400 hover:scale-110 hover:duration-700 hover:ease-in-out">
                  Join Endeavor
                </button>
              </div>
            </div>
            <div className="mx-auto mt-8 w-8/12 rounded-lg bg-zinc-900 bg-opacity-50 px-10 py-6 shadow-md shadow-md">
              {/* GOALS Div, not implemented*/}
              <div className="mx-auto mt-1 max-w-4xl px-10 pb-3">
                <h2 className="text-2xl font-bold">Goals:</h2>
                <ul>
                  <li className="mx-auto mt-2 max-w-4xl rounded-lg bg-gray-600 px-4 py-3 shadow-md shadow-black">
                    <h3 className="text-l font-medium">Donations</h3>
                    <p>Stretch Goal!</p>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleGoToStripe}
                  className="text-l mt-3 rounded bg-indigo-600 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
                >
                  Donate
                </button>
              </div>
              <div className="flex justify-center">
                <p className="mt-2 text-sm text-zinc-500">
                  (Routes to test Stripe page)
                </p>
              </div>
              {/* PROGRESS BAR, not implemented */}
              <div className="mt-1">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Funding</h3>
                  <h2 className="text-l font-medium">{`${funding}$/100$`}</h2>
                </div>
                <div className="my-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-green-600 dark:bg-green-500"
                    styles={`width= ${funding}%;`}
                  ></div>
                </div>
              </div>
            </div>
            {/* Comments Div, not implemented */}
            <div className="mx-auto mt-2 max-w-4xl px-10 py-6">
              <h2 className="py-2 text-2xl font-semibold text-zinc-400">
                Comments:
              </h2>
              <ul>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">Hello there, this is a comment.</p>
                  <p className="text-white">Jared</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
