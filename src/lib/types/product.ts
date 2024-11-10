type Product = {
	default_price: {
		id: string;
		object: string;
		currency: string;
		unit_amount: number;
	};
	marketing_features: string[];
	metadata: {
		slug: string;
		stock: number;
		category: string;
		order: number;
		variant: string;
		digitalAsset: string;
		preview: string;
	};
	id: string;
	object: string;
	active: boolean;
	created: number; // Unix timestamp
	deleted: null | boolean; // `null` if not deleted, `true` if deleted
	description: string;
	images: string[];
	livemode: boolean;
	name: string;
	package_dimensions: {
		height: number;
		length: number;
		weight: number;
		width: number;
	};
	shippable: boolean;
	statement_descriptor: string;
	tax_code: string | null;
	type: string;
	unit_label: string;
	updated: number; // Unix timestamp
	url: string;
};
