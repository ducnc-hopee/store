import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { NavItem } from "../components/ui/NavItem";

const meta: Meta<typeof NavItem> = {
  title: "Components/NavItem",
  component: NavItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    isActive: { control: "boolean" },
    href: { control: "text" },
    children: { control: "text" },
  },
  args: {
    isActive: false,
    href: "/projects",
    children: "Projects",
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    isActive: false,
  },
};

export const CustomLink: Story = {
  args: {
    href: "/dashboard",
    children: "Dashboard",
    isActive: false,
  },
};
