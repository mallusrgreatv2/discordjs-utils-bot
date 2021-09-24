import axios from "axios";
import Command from "../../interfaces/command";
export const command: Command = {
  name: "docs",
  options: [
    {
      name: "query",
      type: "STRING",
      description: "Query to search",
      required: true,
    },
    {
      name: "source",
      type: "STRING",
      description:
        "Source. stable/dev/collection. Collection class can only be accessed from collection source.",
      required: false,
      choices: [
        {
          name: "stable",
          value: "stable",
        },
        {
          name: "dev",
          value: "dev",
        },
        {
          name: "collection",
          value: "collection",
        },
      ],
    },
  ],
  description: "Discord.js Documentation",
  run: async ({ interaction }) => {
    const query = interaction.options.getString("query");
    const source = interaction.options.get("source")?.value || "stable";
    const { data } = await axios.get(
      `https://djsdocs.sorta.moe/v2/?q=${query}&src=${source}`
    );
    const message = `${data.internal_type} **[${
      data.name
    }](https://discord.js.org/#/docs/main/${source}/${formatType}/${
      data.name
    })**\n${stripHtml(data.description)}`;
    return await interaction.reply(message);
  },
};
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/gm, "");
}
function formatType(type: string): string {
  if (type == "typedef") return type + "s";
}
