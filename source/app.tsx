import React, {useEffect, useState} from 'react';
import {Text} from 'ink';
import child_process from 'child_process';

type Props = {
	time: number | undefined;
};

export default function App({time = 60}: Props) {
	const [timer, setTimer] = useState(time);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimer(prevTimer => {
				if (prevTimer > 0) {
					return prevTimer - 1;
				} else {
					clearInterval(intervalId);
					child_process.spawnSync('afplay source/audio/ring.mp3', {
						shell: true,
					});
					return 0;
				}
			});
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<Text>
			Timer: <Text color="green">{timer}</Text>
		</Text>
	);
}
