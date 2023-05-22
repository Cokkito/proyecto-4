import * as React from 'react';
import Box from '@mui/material/Box';
import MuiRating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { pages } from './data';

interface Props {
	pagePath: string;
}

export default function Rating({ pagePath }: Props) {
	const [value, setValue] = React.useState<number | null>(0);
	const [{ key: pageName }] = pages.filter((page) => page.route === pagePath);

	return (
		<Box
			sx={{
				'& > legend': { mt: 2 },
			}}
		>
			<Typography>{`Califica "${pageName}"`}</Typography>
			<MuiRating
				name='rating'
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				readOnly={!!value}
			/>
		</Box>
	);
}
