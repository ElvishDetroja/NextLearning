import axios from "axios";
import { usersFetch } from "./../../users/page";

// 
// 
// 

async function User({ params }) {
  const users = await usersFetch();

  console.log("users", users);
  const id = params.id;

  const data = await axios.get(`https://dummyjson.com/users/${id}`);
  const user = data.data;
  console.log(data);

  return (
    <>
      {Object.keys(user).length > 0 && (
        <div>
          <p>id : {user.id}</p>
          <p>firstName : {user.firstName}</p>
          <p>lastName : {user.lastName}</p>
          <p>gender : {user.gender}</p>
          <p>email : {user.email}</p>
          <p>phone : {user.phone}</p>
          <p>birthDate : {user.birthDate}</p>
        </div>
      )}
    </>
  );
}

export async function generateStaticParams() {
  const { users } = await usersFetch();
  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

export default User;
