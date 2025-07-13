import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "Hello world",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    placeholder: "Invalid input",
  },
};
