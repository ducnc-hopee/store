import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-md mx-auto mt-10">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4 text-sm text-foreground bg-muted rounded-md">
          This is the Overview tab content.
        </div>
      </TabsContent>
      <TabsContent value="features">
        <div className="p-4 text-sm text-foreground bg-muted rounded-md">
          Features go here.
        </div>
      </TabsContent>
      <TabsContent value="reviews">
        <div className="p-4 text-sm text-foreground bg-muted rounded-md">
          Here are user reviews.
        </div>
      </TabsContent>
    </Tabs>
  ),
};
