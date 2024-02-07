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
  return (
    <div className="overflow-x-hidden bg-gray-100">
      {/* name of endeavor and description */}
      <div className="px-6 py-8">
        <div className="w-full lg:w-8/12">
          <div className="mt-4">
            <div className="flex items-center justify-between mx-auto">
              <h1 className="ml-4 text-3xl font-bold">Endeavor</h1>
              <h2 className="mr-10 text-xl text-green-500 font-medium">ACTIVE</h2>
            </div>
              <div className="mt-2 max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md shadow-black">
                <div className="mt-2"><p className="text-2xl font-bold text-gray-700"></p>
                  <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>
                <div className="flex items-center justify-between mt-4"><a href="#"
                      className="text-l font-bold px-3 py-2 text-zinc-200 bg-blue-500 rounded hover:scale-110 hover:duration-700 hover:ease-in-out">JOIN US</a>
                      <p className="font-bold">10 Members</p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold">Funding</h3>
                    <h2 className="text-l font-medium">350$ / 1000$</h2>
                  </div>
                  <div className="my-3 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={styles.progressBar1}></div>
                  </div>
                </div>
            </div>
            {/* Contributors Div */}
            <div className="mt-2 max-w-4xl px-10 py-6 mx-auto bg-white">
              <h2 className="text-2xl font-bold">Contributors</h2>
              <ul className="py-4 flex flex-wrap -mx-2">
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Jared</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Owen</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Dustin</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Matt</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Stephon</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Cody</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Kerri</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Ace</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Evie</li>
                <li className="bg-indigo-100 py-1 px-2 my-2 mx-2 rounded-lg overflow-hidden shadow-md">Isla</li>
              </ul>
            </div>
            {/* GOALS Div */}
            <div className="mt-1 max-w-4xl px-10 mx-auto bg-white">
              <h2 className="text-2xl font-bold">Top Goals:</h2>
              <ul>
                <li className="mt-2 max-w-4xl px-4 py-3 mx-auto bg-white rounded-lg shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque</p>
                  {/* Progress Bar Code */}
                  <div className="my-3 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={styles.progressBar1}></div>
                  </div>
                </li>
                <li className="mt-2 max-w-4xl px-4 py-3 mx-auto bg-white rounded-lg shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque</p>
                  {/* Progress Bar Code */}
                  <div className="my-3 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={styles.progressBar2}></div>
                  </div>
                </li>
                <li className="mt-2 max-w-4xl px-4 py-3 mx-auto bg-white rounded-lg shadow-md shadow-black">
                  <h3 className="text-l font-medium">Goal</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque</p>
                  {/* Progress Bar Code */}
                  <div className="my-3 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={styles.progressBar3}></div>
                  </div>
                </li>
              </ul>
            </div>
            {/* Comments Div */}
            <div className="mt-2 max-w-4xl px-10 py-6 mx-auto bg-white">
              <ul>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
                <li className="flex items-center justify-between mt-1 max-w-5/6 px-4 py-3 mx-auto bg-zinc-400 rounded-lg shadow-md shadow-black">
                  <p className="text-white">This is a comment, this topic sucks.</p>
                  <p className="text-white">Jared</p>
                </li>
              </ul>
            </div>
          </div>  
        </div>
      </div>
      {/* aside */}
      <div className="hidden w-4/12 -mx-8 lg:block">
        <div className="px-8">
          <h1 className="mb-4 text-xl font-bold text-gray-700">Founders</h1>
            <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
              <ul className="-mx-4">
                <li className="flex items-center">
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Jared</a><span
                      className="text-sm font-light text-gray-700">Created 23 Posts</span></p>                
                </li>
                <li className="flex items-center">
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Owen</a><span
                        className="text-sm font-light text-gray-700">Created 23 Posts</span></p>                
                  </li>
                <li className="flex items-center">
                  <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Dustin</a><span
                    className="text-sm font-light text-gray-700">Created 23 Posts</span></p>                
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
};