import chalk from "chalk";
export default class Logger {
  useChalk = true;
  public constructor(useChalk: boolean = true) {
    this.useChalk = useChalk;
  }
  public success(message: string): void {
    return console.log(`${chalk.green("[SUCCESS]")} ${message}`);
  }
  public error(message: string): void {
    return console.log(`${chalk.bgRed("[ERROR]")} ${message}`);
  }
  public info(message: string): void {
    return console.log(`${chalk.black.bgWhite("[INFO]")} ${message}`);
  }
}
