export class Order {
	constructor(
		public id: number,
		public productId: number,
		public customerId: number,
		public date: Date,
		public quantity: number,
		public amount: number
	) {
	}
}
