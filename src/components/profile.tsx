'use client';
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>From client component, user is signed in</div>
    )
  }
  return (
    <div>From client component, user is NOT signed in</div>
  )
}

export default Profile;