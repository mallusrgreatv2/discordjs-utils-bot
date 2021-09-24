import { ClientEvents } from "discord.js";
import CustomClient from "../client";

export default interface Event {
  name: keyof ClientEvents;
  run: (client: CustomClient, ...params: any[]) => Promise<void>;
}
