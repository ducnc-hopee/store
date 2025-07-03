import type { Meta, StoryObj } from "@storybook/react";
import { HeaderItem } from "../components/ui/HeaderItem";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof HeaderItem> = {
  title: "Components/HeaderItem",
  component: HeaderItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="bg-navy-blue p-2 text-black inline-block">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  args: {
    href: "/",
    children: "Header Link",
    isActive: false,
  },
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Highlights the link if it's the active route",
    },
    href: {
      control: "text",
      description: "The destination URL",
    },
    children: {
      control: "text",
      description: "The link text",
    },
    className: {
      control: "text",
      description: "Custom Tailwind utility classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderItem>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const CustomClass: Story = {
  args: {
    className: "text-2xl underline font-bold",
  },
};
