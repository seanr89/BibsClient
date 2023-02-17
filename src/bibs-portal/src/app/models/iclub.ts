import { IMember } from "./imember";

export interface IClub {
    name: string;
    active: boolean;
    private: boolean;
    members: IMember[];
  }