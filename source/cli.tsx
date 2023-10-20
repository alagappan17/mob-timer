#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ mob-timer

	Options
		--name  Your name

	Examples
	  $ mob-timer --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			time: {
				type: 'number',
			},
		},
	},
);

render(<App time={cli.flags.time} />);
