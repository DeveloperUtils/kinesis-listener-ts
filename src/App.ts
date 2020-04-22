import commander, { Command } from "commander";

export class App {
    private readonly program: Command

    constructor() {
        this.program = new commander.Command()
    }
        
    public run() {
        this.buildCommandOptions()
        const args = this.program.parse(process.argv)
    }

    private buildCommandOptions() {
        this.program
          .version("0.0.1")
        this.program
          .arguments("[kinesis-stream-name]");
    
        this.program
          .option('-d, --debug', '')
          .option('-f, --forward', 'Forward kinesis record to file')
          .option('-e, --endpoint <endpoint>', 'Specify an alternative endpoint for the kinesis sdk')
          .option('-F, --filename <filename>', 'Filename to Forward kinesis records')
          .option('-r, --retro <retro-time>', 'Start to read "00h11m2s" time ago')
          .option('-H, --horizon', 'Trim Horizon read')
          .option('-R, --refresh-rate <rate>', 'Refresh rate of the dashboard, in time per second (default 10)', 10)
          .option('-b, --batch-size', 'Size of batch for each kinesis getRecord (default 100)', 100)
          .option('-t, --time-format <time-format>', 'Format to print date with')
          .option('-d, --day-format', 'Use hh:mm:ss day date format')
          .option('-i, --fetch-interval', 'fetch-rate of kinesis records in ms', 1);
    
        this.program
          .command('send-event <event-file>')
          .description('Hallo')
          .option('-G', 'dd');
    
    }
}