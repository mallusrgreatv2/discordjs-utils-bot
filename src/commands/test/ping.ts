import Command from "../../interfaces/command";
export const command: Command = {
  name: "ping",
  description: "Pong",
  run: async ({ interaction: i }) => {
    return i.reply("Pong!");
  },
};
