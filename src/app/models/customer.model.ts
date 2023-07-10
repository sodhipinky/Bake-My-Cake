export class Customer {
	constructor(
		public id: number,
		public name: string,
		public email: string,
		public phone: string,
		public address: {
			street: string,
			city: string,
			state: string,
			pinCode: number
		}) {
	}
}
