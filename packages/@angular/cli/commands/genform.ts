import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

const Command = require('../ember-cli/lib/models/command');
const GenerateCommand = require('./generate').default
const stringUtils = require('ember-cli-string-utils');
import * as chalk from 'chalk';





const GenFormCommand = GenerateCommand.extend({
  name: 'gen-form',
  works: 'insideProject',

  /*run: function (commandOptions: any, rawArgs: string[]): Promise<void> {
    (this as any)[stringUtils.camelize(this.name)](commandOptions, rawArgs);

    return Promise.resolve();
  },

  genForm: function() {
    
    console.log(chalk.red("Hijacked by lord iUwej"));
    console.log(chalk.green("Should  a form pointed by the model"));
    
  }*/
  beforeRun: function(args: string[]){
    if(!args.length){
      console.log(chalk.red("No params provided"));
      return;
    }
    console.log(chalk.blue("Preprocessing input here "));
     // Override default help to hide ember blueprints
    return GenerateCommand.prototype.beforeRun.apply(this, arguments);



  }
});

export default GenFormCommand;