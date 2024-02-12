import CommunityComponent from "./CommunityComponent";

export default function CommunityList({
  communities,
  sort,
  join,
}) {
  return (
    <>
      <div className="flex w-10/12 flex-col">
        <h1 className="mb-4 text-center text-xl font-bold text-zinc-200">
          Find your new favorite community and start an Endeavor!
        </h1>
        <div>
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
        {communities.map((community, index) => (
          <CommunityComponent
            key={index}
            community={community}
            index={index}
            join={join}
          />
        ))}
      </div>
    </>
  );
}
