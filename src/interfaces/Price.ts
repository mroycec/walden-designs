export interface StripePrice {
    id: string;
    object: "price";
    active: boolean;
    billing_scheme: "per_unit";
    created: number;
    currency: string;
    custom_unit_amount: null;
    livemode: boolean;
    lookup_key: null;
    metadata: Record<string, unknown>; // The metadata can contain any additional properties
    nickname: null;
    product: string;
    recurring: {
        aggregate_usage: null;
        interval: "day" | "week" | "month" | "year";
        interval_count: number;
        usage_type: "licensed";
    };
    tax_behavior: "unspecified";
    tiers_mode: null;
    transform_quantity: null;
    type: "recurring";
    unit_amount: number;
    unit_amount_decimal: string;
}
