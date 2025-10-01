type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function serverFetcher() {
  await new Promise((resolve)=> setTimeout(resolve,2000))
  const response  = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await response.json();
  console.log(users);
}