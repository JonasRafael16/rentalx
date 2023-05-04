import { Specification } from "../model/Specification";

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ISpecificationsDTO): void;
  findByname(name: string): Specification | void;
}

export { ISpecificationsRepository, ISpecificationsDTO };
