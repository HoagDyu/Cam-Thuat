# Frontend Structure Guide

## Project Overview
A modern fashion e-commerce platform built with React, TypeScript, and Tailwind CSS.

## Folder Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header with logo and auth buttons
│   │   ├── Footer.tsx       # Footer with links and company info
│   │   └── Navbar.tsx       # (Reserved for future use)
│   │
│   ├── contexts/            # React Context for state management
│   │   └── RouterContext.tsx # Page routing and navigation context
│   │
│   ├── pages/               # Full page components
│   │   ├── Home.tsx         # Homepage with products and flash sale
│   │   ├── Login.tsx        # Login form page
│   │   ├── Register.tsx     # Registration form page
│   │   └── (Add more pages here)
│   │
│   ├── services/            # API calls and external services
│   │   └── (Placeholder for future API integrations)
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── (Placeholder for custom hooks)
│   │
│   ├── Validation/          # Form validation logic
│   │   └── (Placeholder for validation utilities)
│   │
│   ├── data/                # Static data and constants
│   │   └── (Placeholder for mock data)
│   │
│   ├── assets/              # Images, fonts, and static files
│   │   └── (Project images and icons)
│   │
│   ├── App.tsx              # Main app component with routing
│   ├── App.css              # Global app styles
│   ├── index.css            # Base Tailwind imports and global styles
│   ├── main.tsx             # React entry point
│   └── vite-env.d.ts        # Vite environment types
│
├── public/                  # Static files served as-is
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build configuration
└── eslint.config.js         # ESLint configuration

```

## Component Hierarchy

```
App (RouterProvider)
├── Header
│   ├── Logo (clickable, navigates to home)
│   ├── Navigation Links
│   └── Auth Buttons (Sign up, Login)
│
├── Main Content (based on router state)
│   ├── Home
│   │   ├── Search Bar
│   │   ├── Category Tabs
│   │   ├── Flash Sale Banner
│   │   ├── Product Grid
│   │   └── Join Community Section
│   │
│   ├── Login
│   │   ├── Social Login Buttons
│   │   ├── Email/Password Form
│   │   ├── Keep Logged In Checkbox
│   │   └── Register Link
│   │
│   └── Register
│       ├── Social Login Buttons
│       ├── Name/Email/Password Form
│       ├── Terms Agreement
│       └── Login Link
│
└── Footer
    ├── Brand Info
    ├── Shop Links
    ├── Support Links
    └── Social Media
```

## Key Features

### Home Page
- **Product Grid**: Displays products with images, names, and prices
- **Flash Sale Banner**: Prominent promotional section
- **Category Filters**: Browse products by category
- **Search Bar**: Search functionality (ready for backend integration)
- **Join Community**: Call-to-action section

### Authentication Pages
- **Login Page**: Email/password login with social auth options
- **Register Page**: New user account creation
- **Password Visibility Toggle**: Show/hide password feature

### Navigation
- **RouterContext**: Manages page state without external routing library
- **useRouter Hook**: Provides `navigateTo()` and `currentPage` for navigation
- **Smooth Navigation**: Scrolls to top on page change

## Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Color Scheme**: Pink (#ec407a) and white background
- **Responsive Design**: Mobile-first approach with breakpoints

## State Management

### RouterContext
Manages global page state:
```tsx
const { currentPage, navigateTo } = useRouter();
```

### Component States
- Form inputs use local useState
- Product filters use local useState
- Search query uses local useState

## Next Steps

1. **Backend Integration**
   - Connect login/register forms to Django API
   - Implement API calls in `services/` folder
   - Add form validation

2. **Additional Pages**
   - Product detail page
   - Shopping cart
   - Order history
   - User profile

3. **Enhanced Features**
   - Product filtering and sorting
   - Wishlist functionality
   - Payment integration
   - Admin dashboard

4. **Performance**
   - Image optimization
   - Code splitting
   - Lazy loading

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Tech Stack
- **React 19**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS 4**: Styling
- **PostCSS**: CSS processing
