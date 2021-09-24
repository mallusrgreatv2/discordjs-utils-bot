import { Interaction } from "discord.js";
import Event from "../interfaces/event";
export const event: Event = {
  name: "interactionCreate",
  run: async (client, interaction: Interaction) => {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return await interaction.reply({
          content:
            "That command does not exist in my database!\nIf you think this is a mistake, please contact mallusrgreat#5862",
          ephemeral: true,
        });
      await command.run({ client, interaction });
    }
  },
};
