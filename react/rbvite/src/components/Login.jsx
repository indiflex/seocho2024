import Button from "./atoms/Button";
import Input from "./atoms/Input";

export default function Login({ singIn }) {
  return (
    <form className="border border-red-300 p-5">
      <h2 className="text-center text-3xl font-semibold leading-7 text-green-500">
        Sign In
      </h2>

      <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input label="Name" />
        </div>

        <div className="sm:col-span-3">
          <Input label="Password" type="password" />
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <Button
          onClick={(evt) => {
            evt.preventDefault();
            // evt.stopPropagation();
            singIn("XXX");
          }}
          text="로그인"
          type="primary"
          size="lg"
          className="px-5 py-1"
        />
      </div>
    </form>
  );
}
