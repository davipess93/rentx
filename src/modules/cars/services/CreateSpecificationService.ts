import { ISpecificationsRepository } from "../repositories/ISpacificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationSevice {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationSevice };
