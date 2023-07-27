export interface Product {
    id: string;
    object: string;
    active: boolean;
    attributes: any[]; // Replace 'any' with the actual type of 'attributes' if known
    created: number;
    default_price: any; // Replace 'any' with the actual type of 'default_price' if known
    description: string;
    images: string[];
    livemode: boolean;
    metadata: Record<string, any>; // Replace 'any' with the actual type of 'metadata' if known
    name: string;
    package_dimensions: any; // Replace 'any' with the actual type of 'package_dimensions' if known
    shippable: any; // Replace 'any' with the actual type of 'shippable' if known
    statement_descriptor: any; // Replace 'any' with the actual type of 'statement_descriptor' if known
    tax_code: any; // Replace 'any' with the actual type of 'tax_code' if known
    type: string;
    unit_label: any; // Replace 'any' with the actual type of 'unit_label' if known
    updated: number;
    url: any; // Replace 'any' with the actual type of 'url' if known
}




