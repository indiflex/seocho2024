import Input from "./Input";

const meta = {
  component: Input,
  title: "Atomic Input",
  tags: ["autodocs"],
};

export const DefaultInput = {
  args: {
    label: "DefaultInput",
  },
};

export const PasswordInput = {
  args: {
    label: "PasswordInput",
    type: "password",
  },
};

export const EmailInput = {
  args: {
    label: "EmailInput",
    type: "email",
  },
};

export const NumberInput = {
  args: {
    label: "NumInput",
    type: "number",
  },
};

export const DateInput = {
  args: {
    label: "DateInput",
    type: "date",
  },
};

export const Others = {
  render: () => (
    <>
      <Input type="text" label="ID" placehoder="UserID..." />
      <Input type="password" label="Password" placehoder="UserPassword..." />
      <Input type="tel" label="전화번호" />
      <Input type="color" label="Color" />
    </>
  ),
};

export default meta;
