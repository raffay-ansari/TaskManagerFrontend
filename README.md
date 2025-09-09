# Task Manager Frontend

A React frontend application built with Adobe React Spectrum and Relay GraphQL client for the Task Manager backend.

## Features

- **Modern React UI**: Built with Adobe React Spectrum design system
- **GraphQL Integration**: Uses Relay for efficient GraphQL queries and mutations
- **Real-time Task Management**: Create, update, and manage tasks with different statuses
- **Responsive Design**: Works seamlessly across different screen sizes
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **React 18** - Frontend framework
- **Adobe React Spectrum** - UI component library
- **Relay** - GraphQL client for React
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Running TaskManager backend on port 5279

### Installation

1. Navigate to the frontend directory:
   \`\`\`bash
   cd TaskManagerFrontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Generate Relay artifacts:
   \`\`\`bash
   npm run relay
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

The application will be available at `http://localhost:3000`

### Backend Integration

The frontend is configured to proxy GraphQL requests to `http://localhost:5279/graphql`. Make sure your backend is running on port 5279.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run relay` - Generate Relay artifacts
- `npm run relay:watch` - Watch and regenerate Relay artifacts

## Project Structure

\`\`\`
src/
├── components/ # React components
│ ├── TaskManager.tsx # Main application component
│ ├── TaskList.tsx # Task list with status grouping
│ ├── TaskItem.tsx # Individual task component
│ └── CreateTaskForm.tsx # Task creation form
├── schema/ # GraphQL schema
├── **generated**/ # Generated Relay artifacts
├── RelayEnvironment.ts # Relay configuration
├── App.tsx # Root application component
└── main.tsx # Application entry point
\`\`\`

## GraphQL Operations

The application uses the following GraphQL operations:

### Queries

- `allTasks` - Fetch all tasks with filtering and sorting

### Mutations

- `createTask` - Create a new task
- `updateTaskStatus` - Update task status (Pending → In Progress → Completed)

## Task Status Flow

Tasks can have three statuses:

1. **Pending** - Newly created tasks
2. **In Progress** - Tasks currently being worked on
3. **Completed** - Finished tasks

Users can transition tasks between these statuses using the action buttons in the UI.
