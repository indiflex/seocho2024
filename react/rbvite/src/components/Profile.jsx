import { useSession } from "../hooks/session-context";
import Button from "./atoms/Button";

export default function Profile() {
  const {
    session: {
      loginUser: { name },
    },
    logout: signOut,
  } = useSession();
  return (
    <>
      <strong className="text-green-500">{name}</strong> logined
      <Button onClick={signOut} text="Sign out" size="xs" />
    </>
  );
}
