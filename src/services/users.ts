import User from "../interfaces/user.interface";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
};

export const getUserByID = async (id: string): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const users = (await res.json()) as User;
  return users;
};
