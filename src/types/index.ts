export type Company = {
    id: string;
    name: string;
    location: string;
    role: 'Farmer' | 'Processor' | 'Distributor' | 'Retailer';
    description: string;
}
