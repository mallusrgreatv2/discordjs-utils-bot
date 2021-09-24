import { CommandInteraction, ApplicationCommandOptionData } from "discord.js";
import CustomClient from "../client";
interface RunObject {
  client?: CustomClient;
  interaction: CommandInteraction;
}

export default interface Command {
  name: string;
  description: string;
  options?: ApplicationCommandOptionData[];
  run: (object: RunObject) => Promise<void>;
}
