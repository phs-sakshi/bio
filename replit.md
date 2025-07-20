# Academic Portfolio Web Application

## Overview

This is a full-stack web application built for an academic portfolio showcasing a PhD student's research, publications, projects, and professional experience. The application follows a modern full-stack architecture with a React frontend, Express.js backend, and PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple

### Key Design Decisions

#### Frontend Technology Choices
- **React with TypeScript**: Provides type safety and modern component patterns
- **Wouter over React Router**: Lightweight routing solution reducing bundle size
- **shadcn/ui + Radix UI**: Accessible, customizable UI components with consistent design
- **TanStack Query**: Robust server state management with caching and synchronization
- **Tailwind CSS**: Utility-first styling with custom color scheme matching academic branding

#### Backend Technology Choices
- **Express.js**: Mature, lightweight web framework with extensive ecosystem
- **Drizzle ORM**: Type-safe database operations with excellent TypeScript integration
- **PostgreSQL**: Robust relational database suitable for structured academic data
- **ESM Modules**: Modern JavaScript module system for better tree-shaking and performance

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Location**: `shared/schema.ts` using Drizzle ORM definitions
- **Migration System**: Drizzle Kit for database migrations in `migrations/` directory

### Frontend Components
- **Navigation**: Smooth scrolling navigation with mobile responsiveness
- **Hero Section**: Personal introduction with academic affiliation
- **Research Section**: Research interests and vision
- **Publications Section**: Academic publications with external links
- **Projects Section**: Research projects with detailed descriptions
- **Experience Section**: Professional work experience timeline
- **Contact Section**: Contact information and collaboration opportunities

### Backend Infrastructure
- **Storage Interface**: Abstract storage interface (`IStorage`) with in-memory implementation for development
- **Route Registration**: Centralized route registration system in `server/routes.ts`
- **Development Server**: Vite integration for hot module replacement in development
- **Error Handling**: Centralized error handling middleware

## Data Flow

### Client-Server Communication
1. **API Requests**: Frontend makes HTTP requests to `/api/*` endpoints
2. **Query Management**: TanStack Query handles caching, background refetching, and optimistic updates
3. **Type Safety**: Shared TypeScript types between frontend and backend ensure consistency
4. **Error Handling**: Centralized error handling with user-friendly error messages

### Development Workflow
1. **Hot Reloading**: Vite provides instant feedback during development
2. **Type Checking**: TypeScript compilation ensures type safety across the stack
3. **Database Migrations**: Drizzle Kit manages schema changes and migrations

## External Dependencies

### Database Integration
- **Neon Database**: Serverless PostgreSQL provider configured via `DATABASE_URL`
- **Connection Pooling**: Automatic connection management through Neon's serverless architecture

### UI Dependencies
- **Radix UI Primitives**: Accessible component foundations (dialogs, dropdowns, etc.)
- **Lucide Icons**: Consistent icon library for UI elements
- **Class Variance Authority**: Type-safe CSS class composition

### Development Tools
- **Replit Integration**: Special development mode detection and tooling
- **ESBuild**: Fast JavaScript bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public/`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served from Express.js in production

### Environment Configuration
- **Development**: Uses Vite dev server with Express API proxy
- **Production**: Express serves static assets and API endpoints
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`

### Production Considerations
- **Session Management**: PostgreSQL-backed sessions for scalability
- **Static File Serving**: Express serves built frontend assets
- **Environment Detection**: Automatic development/production mode switching
- **Error Logging**: Structured logging for API requests and errors

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional VPS hosting with minimal configuration changes.