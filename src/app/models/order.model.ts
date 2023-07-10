export class Order {
	constructor(
		public productId: number,
		public customerId: number,
		public date: Date,
		public quantity: number,
		public amount: number,
		public id?: number
	) {
	}
}
