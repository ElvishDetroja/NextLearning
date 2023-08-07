/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import axios from "axios";
import Link from "next/link";

export async function usersFetch() {
  const data = await axios.get("https://dummyjson.com/users");
  console.log(data.data);
  return data.data;
}

async function Users() {
  //
  const { users } = await usersFetch();

  return (
    <>
      <h3>Users</h3>

      {users?.length > 0 &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                firstName : {user.firstName} - lastName : {user.lastName}
              </p>
              <p>email - {user.email}</p>
              <Link href={`/user/${user.id}`}>more info</Link>
            </div>
          );
        })}
    </>
  );
}

export default Users;
