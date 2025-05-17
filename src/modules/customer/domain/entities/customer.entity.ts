
export class Customer {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
  ){}

  static create(data: Customer): Customer {
    return new Customer(
      data.name,
      data.email,
      data.phone,
    )
  }
}