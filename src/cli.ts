#! /usr/bin/env node

import { Command } from 'commander'
import { test } from './commands/test'

const program = new Command()

program
  .command('test')
  .description('A test command')
  .action(test)

program.parse()
