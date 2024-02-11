import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_ENDEAVOR } from "../utils/queries";

const styles = {
  progressBar1: {
    width: "35%",
  },
  progressBar2: {
    width: "65%",
  },
  progressBar3: {
    width: "95%",
  },
};

export default function Endeavor() {
  const { endeavorId } = useParams();
  console.log(endeavorId);
  const { loading, data } = useQuery(QUERY_SINGLE_ENDEAVOR, {
    variables: { endeavorId: endeavorId },
  });
  console.log(data);

  const endeavor = data?.endeavor || [];
  console.log(endeavor.title);
  return (
    <div className="container mx-auto flex justify-between overflow-x-hidden bg-gray-100">
      {/* name of endeavor and description */}
      <div className="px-6 py-8">
        <div className="w-full lg:w-8/12">
          <div className="mt-4">
            <div className="mx-auto flex items-center justify-between">
              <h1 className="ml-4 text-3xl font-bold">{endeavor.title}</h1>
              <h2 className="mr-10 text-xl font-medium text-green-500">
                ACTIVE
              </h2>
            </div>
            <div className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md shadow-black">
              <div className="mt-2">
                <p className="text-2xl font-bold text-gray-700"></p>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta totam aspernatur doloremque. Excepturi
                  iste iusto eos enim reprehenderit nisi, accusamus delectus
                  nihil quis facere in modi ratione libero!
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href="#"
                  className="text-l rounded bg-blue-500 px-3 py-2 font-bold text-zinc-200 hover:scale-110 hover:duration-700 hover:ease-in-out"
                >
                  JOIN US
                </a>
                <p className="font-bold">10 Members</p>
              </div>
              <div className="mt-6">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Funding</h3>
                  <h2 className="text-l font-medium">350$ / 1000$</h2>
                </div>
                <div className="my-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-1.5 rounded-full bg-green-600 dark:bg-green-500"
                    style={styles.progressBar1}
                  ></div>
                </div>
              </div>
            </div>
            {/* Contributors Div */}
            <div className="mx-auto mt-2 max-w-4xl bg-white px-10 py-6">
              <h2 className="text-2xl font-bold">Contributors</h2>
              <ul className="-mx-2 flex flex-wrap py-4">
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Jared
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Owen
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Dustin
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Matt
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Stephon
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Cody
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Kerri
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Ace
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Evie
                </li>
                <li className="mx-2 my-2 overflow-hidden rounded-lg bg-indigo-100 px-2 py-1 shadow-md">
                  Isla
                </li>
              </ul>
            </div>
            {/* GOALS Div */}
            <div className="mx-auto mt-1 max-w-4xl bg-white px-10">
              <h2 className="text-2xl font-bold">Top Goals:</h2>
              <ul>
                <li className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-4 py-3 shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque
                  </p>
                  {/* Progress Bar Code */}
                  <div className="my-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"
                      style={styles.progressBar1}
                    ></div>
                  </div>
                </li>
                <li className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-4 py-3 shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque
                  </p>
                  {/* Progress Bar Code */}
                  <div className="my-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"
                      style={styles.progressBar2}
                    ></div>
                  </div>
                </li>
                <li className="mx-auto mt-2 max-w-4xl rounded-lg bg-white px-4 py-3 shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque
                  </p>
                  {/* Progress Bar Code */}
                  <div className="my-3 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"
                      style={styles.progressBar3}
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Comments Div */}
            <div className="mx-auto mt-2 max-w-4xl bg-white px-10 py-6">
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
      {/* aside */}
      <div className="container -mx-8 hidden w-4/12 lg:block">
        <div className="px-8 ">
          <h1 className="mb-4 text-xl font-bold text-gray-700">Founders</h1>
          <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-6 py-4 shadow-md">
            <ul className="-mx-4">
              <li className="flex items-center">
                <p>
                  <a
                    href="#"
                    className="mx-1 font-bold text-gray-700 hover:underline"
                  >
                    Jared
                  </a>
                  <span className="text-sm font-light text-gray-700">
                    Created 23 Posts
                  </span>
                </p>
              </li>
              <li className="flex items-center">
                <p>
                  <a
                    href="#"
                    className="mx-1 font-bold text-gray-700 hover:underline"
                  >
                    Owen
                  </a>
                  <span className="text-sm font-light text-gray-700">
                    Created 23 Posts
                  </span>
                </p>
              </li>
              <li className="flex items-center">
                <p>
                  <a
                    href="#"
                    className="mx-1 font-bold text-gray-700 hover:underline"
                  >
                    Dustin
                  </a>
                  <span className="text-sm font-light text-gray-700">
                    Created 23 Posts
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
