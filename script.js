#!/usr/bin/env node
process.stdin.pipe(require('./hexify')()).pipe(process.stdout);
