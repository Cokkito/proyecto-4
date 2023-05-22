import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { ICartItem } from 'pages/Shop/type';
import { IAddressForm, IPaymentForm } from '../types';

export interface Props {
	cart: ICartItem[];
	addressForm: IAddressForm;
	paymentForm: IPaymentForm;
}

export default function Review({ cart, addressForm, paymentForm }: Props) {
	const total = cart.reduce((acc, { amount, price }) => {
		acc += amount * price;
		return acc;
	}, 0);

	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Order summary
			</Typography>
			<List disablePadding>
				{cart.map((product) => (
					<ListItem key={product.name} sx={{ py: 1, px: 0 }}>
						<ListItemText primary={`${product.name}  X ${product.amount}`} />
						<Typography variant='body2'>{`$${
							product.price * product.amount
						}`}</Typography>
					</ListItem>
				))}
				<ListItem sx={{ py: 1, px: 0 }}>
					<ListItemText primary='Total' />
					<Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
						{`$${total}`}
					</Typography>
				</ListItem>
			</List>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
						Detalles de entrega
					</Typography>
					<Typography
						gutterBottom
					>{`${addressForm.firstName} ${addressForm.lastName}`}</Typography>
					<Typography
						gutterBottom
					>{`${addressForm.address1} / ${addressForm.address2}`}</Typography>
				</Grid>
				<Grid item container direction='column' xs={12} sm={6}>
					<Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
						Detalles de pago
					</Typography>
					<Grid container>
						<React.Fragment>
							<Grid item xs={6}>
								<Typography gutterBottom>{paymentForm.name}</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography gutterBottom>xxxx-xxxx-xxxx-1234</Typography>
							</Grid>
						</React.Fragment>
					</Grid>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
