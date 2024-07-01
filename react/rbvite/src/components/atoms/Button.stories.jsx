import Button from "./Button";

const meta = {
  component: Button,
  title: "Atomic Button",
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    type: "primary",
    size: "lg",
    text: "PrimaryBtn",
  },
};

export const Danger = {
  args: {
    type: "danger",
    size: "3xl",
    text: "DangerBtn",
  },
};

export const Btn = {
  render: () => (
    <Button
      text="DefaultBtn"
      style={{
        padding: "15px",
      }}
    />
  ),
};

export const Others = {
  render: () => (
    <div className="border">
      <Button type="base" text="BASE" style={{ color: "yellow" }} />

      <Button type="primary" text="PriBtn" className="p-7 text-red-400" />

      <Button
        text="DangerBtn"
        onClick={() => alert("danger")}
        type="danger"
        className="p-7"
      />

      <Button text="default" />

      <button className="btn-primary text-base text-red-500">XX</button>
    </div>
  ),
};

export default meta;
