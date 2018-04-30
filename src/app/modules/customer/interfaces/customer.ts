export interface Customer {
  birthday: Date;
  customerID?: number;
  customerLifetimeValue: number;
  gender: 'm' | 'w';
  lastContact: Date;
  name: {
    first: string;
    last: string;
  };
}
