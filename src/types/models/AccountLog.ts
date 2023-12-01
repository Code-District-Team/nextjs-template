import { User } from "@/types/models/User";

export type AccountLog = {
  _id: string;
  action: string;
  user: User;
  created_by: User;
  created_at: string;
  description: string;
};
