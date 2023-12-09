#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const test_1 = require("./commands/test");
const program = new commander_1.Command();
program
    .command('test')
    .description('A test command')
    .action(test_1.test);
program.parse();
