export interface IAddressForm {
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	country: string;
	zip: string;
}

export interface IPaymentForm {
	name: string;
	number: string;
	cvv: string;
	month: string;
}

export const addressFormDefault = {
	firstName: '',
	lastName: '',
	address1: '',
	address2: '',
	city: '',
	state: '',
	country: '',
	zip: '',
};

export const paymentFormDefault = {
	name: '',
	number: '',
	cvv: '',
	month: '',
};
