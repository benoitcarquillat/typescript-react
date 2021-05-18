import { LinkModel } from "./link.model";

export enum CategoryEnum {
  ROCK = "Music",
  METAL = "Metal",
  POP = "Pop",
  RAP = "Rap",
}

// ? optional extends -> don't break if we omit it
export interface InnerComponentModel extends Partial<LinkModel> {
  id: number;
  title: string;
  subtitle?: string;
  category?: CategoryEnum;
  as?: any;
}
