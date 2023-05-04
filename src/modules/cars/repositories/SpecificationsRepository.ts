import { Specification } from '../model/Specification';
import {
  ISpecificationsRepository,
  ISpecificationsDTO,
} from './ISpecificationsRepository';

class SpectificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ISpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByname(name: string): Specification | void {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpectificationsRepository };
