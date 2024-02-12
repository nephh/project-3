const db = require("../config/connection");
const { User, Community, Endeavor } = require("../models");
const userSeeds = require("./userSeeds.json");
const communitySeeds = require("./communitySeeds.json");
const endeavorSeeds = require("./endeavorSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Community", "communities");
    await cleanDB("Endeavor", "endeavors");
    await cleanDB("User", "users");

    await User.create(userSeeds);

    for (let i = 0; i < communitySeeds.length; i++) {
      let { users } = communitySeeds[i];
      let newUsers = [];
      for (const user of users) {
        const communityUser = await User.findOne({ username: user });
        const userId = communityUser._id;
        newUsers.push(userId);
      }

      communitySeeds[i].users = newUsers;

      const { _id, creator } = await Community.create(communitySeeds[i]);
      await User.findOneAndUpdate(
        { username: creator },
        {
          $addToSet: {
            communities: _id,
          },
        },
      );

      for (const user of users) {
        await User.findOneAndUpdate(
          { username: user },
          {
            $addToSet: {
              communities: _id,
            },
          },
        );
      }
    }

    for (let i = 0; i < endeavorSeeds.length; i++) {
      let { users } = endeavorSeeds[i];
      let newUsers = [];
      for (const user of users) {
        const endeavorUser = await User.findOne({ username: user });
        const userId = endeavorUser._id;
        newUsers.push(userId);
      }

      endeavorSeeds[i].users = newUsers;

      const { _id, community } = await Endeavor.create(endeavorSeeds[i]);
      await Community.findOneAndUpdate(
        { name: community },
        {
          $addToSet: {
            endeavors: _id,
          },
        },
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
