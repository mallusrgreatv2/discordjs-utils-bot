import Event from "../interfaces/event";
export const event: Event = {
  name: "ready",
  run: async (client) => {
    console.log(
      client.generateInvite({
        scopes: ["applications.commands", "bot"],
        permissions: ["ADMINISTRATOR"],
      })
    );
    client.logger.success("Client connected to Discord");
    await client.guilds.cache.get("858377063009222726").commands.set(
      client.commands.reduce((a, v) => {
        a.push(v);
        return a;
      }, [])
    );
    console.log("Set commands");
    return;
  },
};
