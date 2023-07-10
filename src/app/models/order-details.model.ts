export class OrderDetails {
	constructor(
		public orderId: number,
		public productName: string,
		public quantity: number,
		public price: number,
		public amount: number,
		public customerName: string,
		public customerEmail: string,
		public customerPhone: string,
		public customerAddress: {
			customerStreet: string,
			customerCity: string,
			customerState: string,
			customerPinCode: number
		}
	) {
	}
}
