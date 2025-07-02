# Code Convention for Next.js + TypeScript Project

This document defines the coding conventions for our Next.js + TypeScript project, utilizing a feature-based architecture. It includes guidelines for Mantine, react-hook-form + zod, Storybook, and i18n (supporting Japanese and English).

## Common Conventions

- **Language**: Use English for all code, comments, documentation, and commit messages for consistency and accessibility.
- **Helper Functions**: Document every helper function with JSDoc comments, detailing purpose, parameters, and return values.
- **Error Handling**: Implement try-catch blocks for async functions and API calls to handle errors gracefully.
- **Code Formatting**: Enforce code quality with Prettier for formatting and ESLint for linting.

## Code Comments:

- **Descriptive Naming**: Prioritize clear, self-explanatory names for variables, functions, and components to minimize the need for comments. Only add comments when naming alone is insufficient to convey intent or complex logic.

  ```typescript
  // Avoid: Unclear naming with comment
  const x = 100; // Maximum upload size in KB

  // Prefer: Self-explanatory naming
  const MAX_UPLOAD_SIZE_KB = 100;
  ```

- **JSDoc for Helper Functions**: Use JSDoc for all helper functions to describe their purpose, parameters, and return values, enhancing clarity and IDE support.
  ```typescript
  // utils/calculateTotalPrice.ts
  /**
   * Calculates the total price including tax for a list of items.
   * @param items - Array of items with price and quantity.
   * @param taxRate - Tax rate as a decimal (e.g., 0.1 for 10%).
   * @returns Total price including tax.
   */
  export const calculateTotalPrice = (
    items: { price: number; quantity: number }[],
    taxRate: number
  ): number => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return subtotal * (1 + taxRate);
  };
  ```
- **Avoid Redundant Comments**: Do not comment obvious code (e.g., `// Set state` for `setState(true)`). Focus comments on explaining _why_ rather than _what_.
- **Comment Placement**: Place comments above the relevant code block or line, using single-line `//` for brief notes and multi-line `/* */` for detailed explanations.

## Naming Conventions

- **Components**: Name components in PascalCase, matching their file names (e.g., `UserProfile.tsx` for `UserProfile`).
- **Non-Component Functions**: Use camelCase for utility/helper functions (e.g., `fetchUserData`).
- **Constants**: Use UPPER_SNAKE_CASE for constants (e.g., `MAX_UPLOAD_SIZE`).
- **Variables and Props**: Use descriptive names, avoiding unclear abbreviations (e.g., `userId` instead of `uId`).
- **Files**: Use PascalCase for component files and camelCase for others (e.g., `UserProfile.tsx`, `fetchUserData.ts`).

## Type Conventions

- **Type Prefix**: Prefix types with `T` and interfaces with `I` (e.g., `TUserProps`, `IUser`).
- **Priority**: Type > Interface
- **Component Props**: Define props with `T<ComponentName>Props` using `FC<>` from React (e.g., `FC<TButtonProps>`).
- **Single-Level Types**: Avoid nesting types beyond one level; split complex types into separate declarations.
- **Union Types**: Define union types (e.g., `variant`, `size`) as constants and derive types using `typeof`.

  ```typescript
  import { valueOf } from "../types";

  export const APP_TYPE = {
    MedicalOrganizationAdmin: "Medical-Organization-Admin",
    CRC: "CRC",
    VitaliveCS: "Vitalive-CS",
    EXAMINEES: "Examinees",
    OPS: "OPS",
  } as const;

  export type TAppType = valueOf<typeof APP_TYPE>;
  ```

- **Zod Schemas**: Use Zod for form validation and derive TypeScript types with `z.infer` for type safety.

  ```typescript
  import { z } from "zod";

  const UserSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
  });

  type TUserForm = z.infer<typeof UserSchema>;
  ```

## Coding Conventions

### Project Structure

- **Feature-Based Architecture**: Organize code by features (e.g., `/features/auth`, `/features/dashboard`) for modularity.
- **Directory Structure**:
  ```
  ├── api                 // Generated from OpenAPI
  ├── assets
  │   ├── icons         // SVG icons
  │   └── images        // Image assets
  ├── components
  │   ├── commons       // Shared components (e.g., BackToTop, PreventRouting)
  │   └── elements      // UI components (e.g., Button, Alert, Table)
  ├── constants         // Global constants
  ├── design            // Design system configurations
  ├── hooks             // Custom hooks
  ├── hocs              // Higher-order components
  ├── libs              // Library configurations
  ├── locales           // i18n translation files
  │   ├── en
  │   └── ja
  ├── middlewares       // Middleware configurations
  ├── providers         // Context providers
  ├── types             // TypeScript types
  └── utils             // Utility functions
  ```

### Component Conventions

- **Reusable Components**: Create a Storybook story file for each reusable component in `/features/<featureName>/stories`.

  ```typescript
  // features/user/components/UserCard.tsx
  import { FC } from "react";

  type TUserCardProps = {
    name: string;
    email: string;
  };

  export const UserCard: FC<TUserCardProps> = ({ name, email }) => {
    return (
      <div>
        {name} - {email}
      </div>
    );
  };
  ```

  ```typescript
  // features/user/stories/UserCard.stories.tsx
  import { Meta, StoryObj } from "@storybook/react";
  import { UserCard } from "../components/UserCard";

  const meta: Meta<typeof UserCard> = {
    title: "User/UserCard",
    component: UserCard,
  };

  export default meta;
  type Story = StoryObj<typeof UserCard>;

  export const Default: Story = {
    args: {
      name: "John Doe",
      email: "john@example.com",
    },
  };
  ```

- **Mantine Components**: Use Mantine for UI consistency, with styles customized via vanilla-extract.
- **Props Validation**: Use `react-hook-form` with Zod for type-safe form validation.
- **Component Length**: Limit component files to 80 lines; split large components or extract logic to custom hooks.
- **Icon Components**: Use `em` units for width/height and `currentColor` for color. Spread all SVG props to the SVG element.

  ```typescript
  // components/elements/icons/ArrowRightIcon.tsx
  import { FC } from "react";

  export const ArrowRightIcon: FC<React.SVGProps<SVGSVGElement>> = ({
    props,
  }) => {
    return (
      <svg
        width="1em"
        height="1em"
        fill="currentColor"
        {...props}
        viewBox="0 0 24 24"
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    );
  };
  ```

### Hooks

- **Custom Hooks**: Prefix with `use` (e.g., `useFetchUser`) and place in `/features/<featureName>/hooks`.
- **Hook Documentation**: Use JSDoc to document purpose, parameters, and return values.

  ```typescript
  // features/user/hooks/useFetchUser.ts
  import { useState, useEffect } from "react";

  /**
   * Fetches user data by ID.
   * @param userId - The ID of the user to fetch.
   * @returns An object containing user data, loading state, and error state.
   */
  export const useFetchUser = (userId: string) => {
    const [data, setData] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch logic here
    return { data, loading, error };
  };
  ```

- **React Hook Form**: Integrate `react-hook-form` with Zod for type-safe form hooks.

### Context

- **Props Drilling**: Use React Context if props drilling exceeds three levels.
- **Context Structure**: Place context files in `/features/<featureName>/context` with typed values.

  ```typescript
  // features/auth/context/AuthContext.ts
  import { createContext, useContext, FC } from "react";

  type TAuthContext = {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
  };

  export const AuthContext = createContext<TAuthContext | undefined>(undefined);

  type TAuthProviderProps = {
    children: React.ReactNode;
  };

  export const AuthProvider: FC<TAuthProviderProps> = ({ children }) => {
    const value = {
      isAuthenticated: false,
      login: (token: string) => {},
      logout: () => {},
    };
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  };

  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
  };
  ```

### Routing

- **Query Parameters**: Use query parameters for filters or modals (e.g., `?modal=open`, `?filter=active`).
- **Route Configuration**: Define routes in a centralized file to avoid magic strings.
  ```typescript
  // constants/routes.ts
  export const ROUTES = {
    HOME: "/",
    USER_PROFILE: "/user/:id",
    DASHBOARD: "/dashboard",
  } as const;
  ```
- **Dynamic Routes**: Use Next.js dynamic routes with TypeScript for type safety.

  ```typescript
  // pages/user/[id].tsx
  import { useRouter } from "next/router";
  import { FC } from "react";

  const UserProfilePage: FC = () => {
    const {
      query: { id },
    } = useRouter();
    return <div>User ID: {id}</div>;
  };

  export default UserProfilePage;
  ```

### Internationalization (i18n)

- **Supported Languages**: Support Japanese (`ja`) and English (`en`) using `next-i18next`.
- **Translation Files**: Store translations in `/libs/font-end/locales/<language>/<namespace>.json`. Update with CLI:
  ```bash
  pnpm nx run libs/frontend:locale-generate <app_name> # app_name: storybook, cs, medical, crc
  ```
  ```json
  // locales/en/common.json
  {
    "welcome": "Welcome to the app"
  }
  // locales/ja/common.json
  {
    "welcome": "アプリへようこそ"
  }
  ```
- **Usage**: Use `useTranslation` hook or `t` function for translations.

  ```typescript
  import { useTranslation } from "next-i18next";
  import { FC } from "react";

  const MyComponent: FC = () => {
    const { t } = useTranslation("common");
    return <div>{t("welcome")}</div>;
  };
  ```

### Testing

- **Unit Tests**: Write tests for components, hooks, and utilities using Jest and React Testing Library in `/features/<featureName>/__tests__`.
- **Test Naming**: Use `.test.ts` or `.test.tsx` suffix (e.g., `UserCard.test.tsx`).
- **Coverage**: Target at least 80% test coverage for critical features.

### Performance

- **Memoization**: Use `React.memo`, `useCallback`, and `useMemo` to optimize rendering.
- **Image Optimization**: Use Next.js `Image` component for optimized image loading.

### Function Placement

- **Utils**: Store general-purpose utilities (e.g., string manipulation, date formatting) in `/utils`.
  ```typescript
  // utils/formatDate.ts
  /**
   * Formats a date to a localized string.
   * @param date - The date to format.
   * @param locale - The locale string (e.g., 'en', 'ja').
   * @returns Formatted date string.
   */
  export const formatDate = (date: Date, locale: string): string => {
    return date.toLocaleDateString(locale);
  };
  ```
- **Libs**: Store library-specific configurations (e.g., API clients) in `/libs`.

  ```typescript
  // libs/apiClient.ts
  import axios from "axios";

  /**
   * Configured Axios instance for API requests.
   * @returns Axios instance with base URL and headers.
   */
  export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { "Content-Type": "application/json" },
  });
  ```

- **Feature-Specific Functions**: Place in `/features/<featureName>/utils`.

### API Response Type Conversion

- **Transformers**: Create functions to map API response types to UI types in `/features/<featureName>/utils/transformers`.
  ```typescript
  /**
   * Transforms API user response to UI user type.
   * @param apiData - Raw API response data.
   * @returns Transformed user data for UI.
   */
  export const transformUserApiToUi = (
    apiData: z.infer<typeof UserApiSchema>
  ): TUser => {
    return {
      id: apiData.user_id,
      name: apiData.full_name,
      email: apiData.email_address,
    };
  };
  ```
- **Validation**: Validate API responses with Zod before transformation.

  ```typescript
  // features/user/services/fetchUser.ts
  import { UserApiSchema, transformUserApiToUi } from "../types/transformers";

  /**
   * Fetches and transforms user data from API.
   * @param userId - The ID of the user to fetch.
   * @returns Transformed user data for UI.
   */
  export const fetchUser = async (userId: string): Promise<TUser> => {
    const response = await apiClient.get(`/users/${userId}`);
    const validatedData = UserApiSchema.parse(response.data);
    return transformUserApiToUi(validatedData);
  };
  ```

### Accessibility (a11y)

- **ARIA Attributes**: Add appropriate ARIA attributes to interactive elements.
- **Keyboard Navigation**: Ensure components support keyboard navigation, especially for modals and forms.
- **Storybook Add-ons**: Use `@storybook/addon-a11y` to detect accessibility issues.

## Recommendations

- **Atomic Design**: Adopt Atomic Design (atoms, molecules, organisms) for feature components.
- **ESLint Plugins**: Use `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y` for best practices and accessibility.
- **CI/CD**: Integrate ESLint, Prettier, Jest, and accessibility tests into CI/CD pipelines.
