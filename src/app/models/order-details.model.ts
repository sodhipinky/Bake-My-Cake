export class OrderDetails {
	constructor(
		public orderId: number,
		public orderDate: Date,
		public productName: string,
		public quantity: number,
		public price: number,
		public customerName: string,
		public customerEmail: string,
		public customerPhone: string,
		public customerAddress: {
			street: string,
			city: string,
			state: string,
			pinCode: number
		},
		public amount: number,
	) {
	}
}
