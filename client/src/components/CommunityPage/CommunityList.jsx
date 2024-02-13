import CommunityComponent from "./CommunityComponent";

export default function CommunityList({ communities, sort, join }) {
  return (
    <>
      <div className="flex w-11/12 md:w-10/12 flex-col">
        <div className="mb-2">
          <button
            onClick={() => sort("popular")}
            className="px-4 py-2 text-sm text-zinc-300"
          >
            Most Popular
          </button>
          |
          <button
            onClick={() => sort("title")}
            className="px-4 py-2 text-sm text-zinc-300"
          >
            Alphabetical Order
          </button>
        </div>
        <div className="flex flex-col md:grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((community, index) => (
            <CommunityComponent
              key={index}
              community={community}
              index={index}
              join={join}
            />
          ))}
        </div>
      </div>
    </>
  );
}
