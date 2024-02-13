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
  console.log(endeavorId)
  console.log(data);

  const endeavor = data?.endeavor || [];
  const users = endeavor?.users || [];
  console.log(endeavor.title);

  // ADD FUNCTIONALITY FOR PROGRESS BAR
  const [ funding, setFunding ] = useState(5);
  
  const handleChange = (event) => {
    setFunding((funding) => {
      funding + 5
    }) 
  }  

  return (
    <div className="container mx-auto flex justify-center">
      {/* name of endeavor and description */}
      <div className="px-auto">
        <div className="w-full lg:w-8/12">
          <div className="mt-4">
            <div className="mx-auto flex items-center justify-between">
              <h1 className="ml-4 text-3xl font-bold text-white">{endeavor.title}</h1>
              <h2 className="mr-10 text-xl font-medium text-green-500">
                ACTIVE
              </h2>
            </div>
            <div className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md shadow-black">
              <div className="mt-2">
                <p className="text-2xl font-bold text-gray-700"></p>
                <p className="mt-2 text-gray-600">
                  {endeavor.content}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href="#"
                  className="text-l rounded bg-blue-500 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
                >
                  JOIN US
                </a>
                <p className="font-bold">{endeavor.userCount} Members</p>
              </div>
              {/* PROGRESS BAR */}
              <div className="mt-6">
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
            {/* Contributors Div */}
            <div className="mx-auto mt-2 max-w-4xl px-10 py-6">
              <h2 className="text-2xl font-bold">Members</h2>
              <ul className="-mx-2 flex flex-wrap py-4">
                {users.map((user, index) => (
                  <li key={index} className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                    {user.username}
                  </li>
                ))}
              </ul>
            </div>
            {/* GOALS Div */}
            <div className="mx-auto mt-1 max-w-4xl px-10">
              <h2 className="text-2xl font-bold">Goals:</h2>
              <ul>
                <li className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-4 py-3 shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>
                    Beat Boss!!!
                  </p>
                </li>
              </ul>
            </div>
            {/* Comments Div */}
            <div className="mx-auto mt-2 max-w-4xl px-10 py-6">
              <ul>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="max-w-5/6 mx-auto mt-1 flex items-center justify-between rounded-lg bg-zinc-400 px-4 py-3 shadow-md shadow-black">
                  <p className="text-white">
                    This is a comment, this topic sucks.
                  </p>
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
