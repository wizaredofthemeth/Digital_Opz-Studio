# Overview

This is an AI image generation application built with React, Express, and TypeScript. The app allows users to generate images using various AI models with customizable parameters like style, aspect ratio, and generation settings. It features a modern dark-themed interface with real-time generation progress tracking, image galleries, and user management capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React SPA**: Built with Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom dark theme variables and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Mock Services**: Image generation simulation with progress tracking
- **In-Memory Storage**: Development storage layer implementing full CRUD operations
- **Session Management**: Express sessions with PostgreSQL store configuration
- **Development Setup**: Vite integration for SSR and hot module replacement

## Data Storage Solutions
- **Database ORM**: Drizzle ORM with PostgreSQL dialect configured
- **Schema Design**: 
  - Users table with credits and subscription management
  - Generated images with metadata (prompts, model settings, dimensions)
  - Generation jobs for async processing tracking
  - Templates for predefined generation presets
- **Migration System**: Drizzle Kit for database schema migrations

## Authentication and Authorization
- **Session-Based Auth**: Express sessions with PostgreSQL session store
- **User Management**: User creation, profile management, and credit tracking
- **Access Control**: Premium feature gating and user-specific content access

## External Dependencies
- **Database**: Neon PostgreSQL serverless database
- **Image Storage**: External URLs (currently using Unsplash as mock service)
- **AI Models**: Mock integration ready for real AI image generation APIs
- **UI Components**: Extensive Radix UI component library
- **Development Tools**: 
  - Replit-specific plugins for development environment
  - TypeScript for type safety across the stack
  - ESBuild for server-side bundling