const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("cms service", async () => {
  let thisService;
  let cmCreated;
  let usersServiceResults;
  let users;

  

  beforeEach(async () => {
    thisService = await app.service("cms");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (cms)");
  });

  describe("#create", () => {
    const options = {"name":"new value"};

    beforeEach(async () => {
      cmCreated = await thisService.Model.create({...options, ...users});
    });

    it("should create a new cm", () => {
      assert.strictEqual(cmCreated.name, options.name);
    });
  });

  describe("#get", () => {
    it("should retrieve a cm by ID", async () => {
      const retrieved = await thisService.Model.findById(cmCreated._id);
      assert.strictEqual(retrieved._id.toString(), cmCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"name":"updated value"};

    it("should update an existing cm ", async () => {
      const cmUpdated = await thisService.Model.findByIdAndUpdate(
        cmCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(cmUpdated.name, options.name);
    });
  });

  describe("#delete", async () => {
    it("should delete a cm", async () => {
      await app
        .service("users")
        .Model.findByIdAndDelete(usersServiceResults._id);

      ;

      const cmDeleted = await thisService.Model.findByIdAndDelete(cmCreated._id);
      assert.strictEqual(cmDeleted._id.toString(), cmCreated._id.toString());
    });
  });
});