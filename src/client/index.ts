import Logger from "../utils/logger";
import { Collection, Client } from "discord.js";
import Command from "../interfaces/command";
import Config from "../interfaces/config";
import Event from "../interfaces/event";
import Glob from "glob";
import { promisify } from "util";
const glob = promisify(Glob);
export default class CustomClient extends Client {
  public constructor() {
    super({
      intents: 32767,
      partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
    });
  }
  logger = new Logger();
  commands = new Collection<string, Command>();
  public async init(config: Config): Promise<void> {
    await this.login(config.token);
    const commandFiles = await glob("./src/commands/**/*.ts");
    commandFiles.forEach(async (fileString) => {
      const file = await import(`${process.cwd()}/${fileString}`);
      const cmd: Command = file.command;
      this.commands.set(cmd?.name, cmd);
    });
    const eventFiles = await glob("./src/events/*.ts");
    eventFiles.forEach(async (fileString) => {
      const file = await import(`${process.cwd()}/${fileString}`);
      const event: Event = file.event;
      this.on(event?.name, event?.run.bind(null, this));
    });
  }
}
