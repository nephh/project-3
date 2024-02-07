export default function DashboardList({ endeavors }) {
  return (
    <>
      <div className="flex w-8/12 flex-col">
        <h1 className="mb-4 text-xl font-bold text-zinc-200">
          Recent Endeavors
        </h1>
        {endeavors.map((item, index) => (
          <div
            key={index}
            className="mb-4 w-full rounded-lg bg-zinc-900 px-10 py-6 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-light text-zinc-400">{item.community}</span>
            </div>
            <div className="mt-2">
              <a
                href="#"
                className="text-2xl font-bold text-zinc-200 hover:underline"
              >
                {item.title}
              </a>
              <p className="mt-2 text-zinc-300">{item.content}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a href="#" className="text-zinc-400 hover:underline">
                Read more
              </a>
              <div>
                <a href="#" className="flex items-center">
                  <h1 className="font-bold text-zinc-400 hover:underline">
                    Author: {item.author}
                  </h1>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
