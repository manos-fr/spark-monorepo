# Spark Monorepo - Technical Architecture Documentation

## Overview

**Spark** is a B2B supplier marketplace platform that connects buyers with suppliers. The application is built as a cross-platform solution supporting web and mobile (iOS/Android) from a single codebase.

**Primary Language**: Greek (UI)
**Target Market**: B2B supplier-buyer relationships

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Stack](#technology-stack)
3. [Architecture Patterns](#architecture-patterns)
4. [Data Flow](#data-flow)
5. [Database Schema](#database-schema)
6. [API Layer](#api-layer)
7. [Authentication](#authentication)
8. [State Management](#state-management)
9. [Real-time Features](#real-time-features)
10. [Infrastructure](#infrastructure)
11. [Development Workflow](#development-workflow)

---

## Project Structure

```
spark-monorepo/
├── apps/                           # Application layer
│   ├── ui/                         # React Native/Expo app (mobile + web)
│   │   ├── src/
│   │   │   ├── app/               # Expo Router file-based routes
│   │   │   │   ├── (app)/         # Protected routes (authenticated)
│   │   │   │   │   ├── chat/      # Real-time messaging
│   │   │   │   │   ├── supplier/  # Supplier details
│   │   │   │   │   └── (conversations)/ # Conversation list
│   │   │   │   └── (auth)/        # Authentication routes
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── graphql/           # GraphQL queries & generated types
│   │   │   ├── hooks/             # Custom React hooks
│   │   │   ├── state/             # Zustand stores
│   │   │   └── utils/             # Utility functions
│   │   └── firebase-config.ts     # Firebase SDK initialization
│   │
│   ├── server/                     # Fastify HTTP server
│   │   └── src/
│   │       ├── app/
│   │       │   ├── routes/        # API routes
│   │       │   └── plugins/       # Fastify plugins
│   │       └── main.ts            # Server entry point
│   │
│   ├── functions/                  # Firebase Cloud Functions
│   │   └── index.ts               # Function definitions
│   │
│   ├── firebase-admin/            # Firebase admin utilities
│   └── sample-data/               # Data seeding scripts
│
├── libs/                           # Shared libraries
│   └── spark-shared/              # Shared TypeScript types
│       └── src/lib/
│           └── spark-shared.ts    # Type definitions
│
├── infrastructure/                 # Backend infrastructure
│   ├── docker-compose.yaml        # Local development services
│   └── hasura/
│       ├── config.yaml            # Hasura CLI config
│       ├── migrations/            # Database migrations (SQL)
│       ├── metadata/              # Hasura metadata (permissions, relationships)
│       └── seeds/                 # Seed data
│
├── schema.graphql                  # Generated GraphQL schema
├── nx.json                         # Nx workspace configuration
├── package.json                    # Root dependencies & scripts
└── firebase.json                   # Firebase deployment config
```

---

## Technology Stack

### Frontend (apps/ui)

| Technology | Version | Purpose |
|------------|---------|---------|
| React Native | 0.74.1 | Cross-platform UI framework |
| Expo | 51.0.8 | React Native tooling & services |
| Expo Router | 3.5.14 | File-based routing |
| TypeScript | 5.3.3 | Type safety |
| Zustand | 4.4.1 | State management |
| Apollo Client | 3.9.5 | GraphQL client |
| TanStack Query | 4.35.3 | Server state management |
| Tailwind CSS | 3.3.3 | Styling (via twrnc) |
| twrnc | 3.6.4 | Tailwind for React Native |
| React Native Gifted Chat | 2.4.0 | Chat UI component |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Hasura | 2.33.0 | GraphQL API engine |
| PostgreSQL | 15 | Primary database |
| Fastify | 4.13.0 | HTTP server framework |
| Firebase Auth | 9.x | Authentication |
| Firebase Functions | 4.7.0 | Serverless functions |

### Build & Development

| Technology | Version | Purpose |
|------------|---------|---------|
| Nx | 19.0.1 | Monorepo management |
| ESBuild | 0.19.12 | Fast bundling |
| GraphQL Codegen | 5.0.2 | Type generation |
| Docker Compose | - | Local infrastructure |

---

## Architecture Patterns

### Monorepo Architecture

The project uses **Nx** for monorepo management with the following benefits:
- Shared dependencies at root level
- Incremental builds with caching
- Consistent tooling across projects
- Code sharing via `libs/spark-shared`

### API-First Design

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   React Native  │────▶│  Hasura GraphQL │────▶│   PostgreSQL    │
│   (Expo App)    │◀────│     Engine      │◀────│    Database     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │
        │                       │
        ▼                       ▼
┌─────────────────┐     ┌─────────────────┐
│  Firebase Auth  │     │ Firebase Cloud  │
│   (JWT Tokens)  │     │   Functions     │
└─────────────────┘     └─────────────────┘
```

### GraphQL-First Approach

- **Hasura** auto-generates GraphQL API from PostgreSQL schema
- **Apollo Client** handles queries, mutations, and subscriptions
- **GraphQL Codegen** generates TypeScript types from schema
- Real-time updates via GraphQL subscriptions (WebSocket)

---

## Data Flow

### Authentication Flow

```
1. User enters credentials
        │
        ▼
2. Firebase Auth validates
        │
        ▼
3. Firebase returns JWT token
        │
        ▼
4. Token stored in Zustand + AsyncStorage
        │
        ▼
5. Apollo Client adds token to headers
        │
        ▼
6. Hasura validates JWT (RS256)
        │
        ▼
7. Hasura applies row-level permissions
```

### Data Fetching Flow

```
React Component
      │
      ▼
useQuery/useMutation/useSubscription (Apollo)
      │
      ▼
Apollo Client (with auth headers)
      │
      ▼
Hasura GraphQL Engine
      │
      ▼
PostgreSQL Database
      │
      ▼
Response with typed data (via codegen)
```

---

## Database Schema

### Entity Relationship Diagram

```
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│    users     │       │ user_relationships│       │   products   │
├──────────────┤       ├──────────────────┤       ├──────────────┤
│ id (PK)      │◀──────│ owner_id (FK)    │       │ id (PK)      │
│ uid (unique) │       │ supplier_id (FK) │──────▶│ name         │
│ email        │       └──────────────────┘       │ category     │
│ name         │                                  │ description  │
│ profile_image│◀─────────────────────────────────│ user_id (FK) │
│ last_seen    │                                  └──────────────┘
│ last_typed   │
│ created_at   │
│ updated_at   │
└──────────────┘
       │
       │ 1:N
       ▼
┌──────────────┐       ┌──────────────────┐       ┌──────────────┐
│   messages   │       │  conversations   │       │    orders    │
├──────────────┤       ├──────────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)          │       │ id (PK)      │
│ text         │       │ name             │       │ products     │
│ user_id (FK) │       └──────────────────┘       │ status       │
│ conversation_│              │                   │ created_at   │
│   id (FK)    │──────────────┘                   │ updated_at   │
│ sender_id    │                                  └──────────────┘
│ is_order     │       ┌──────────────────┐              │
│ timestamp    │       │conversation_users│              │
└──────────────┘       ├──────────────────┤              │
                       │ conversation_id  │              │
                       │ user_id (FK)     │              ▼
                       │ joined_at        │       ┌──────────────┐
                       │ role             │       │orders_products│
                       └──────────────────┘       ├──────────────┤
                                                  │ order_id (FK)│
                                                  │ product_id   │
                                                  └──────────────┘
```

### Core Tables

| Table | Purpose |
|-------|---------|
| `users` | User accounts (synced with Firebase Auth) |
| `products` | Supplier product catalog |
| `conversations` | Chat conversations |
| `messages` | Individual chat messages |
| `user_relationships` | Buyer-supplier connections |
| `orders` | Purchase orders |
| `orders_products` | Order line items |
| `roles` / `user_roles` | Role-based access control |

---

## API Layer

### GraphQL Queries

```graphql
# User queries
query getUser($uid: String_comparison_exp!)
query getUsers
query getUsersByPk($id: Int!)
query getUserSuppliers($id: Int!)

# Conversation queries
query userConversations($userId: Int!)

# Message queries
query messages($conversationId: Int!, $limit: Int!, $offset: Int!, $order_by: order_by!)
```

### GraphQL Mutations

```graphql
# User mutations
mutation addUser($objects: [users_insert_input!]!)
mutation updateUserLastSeen($id: Int!)

# Conversation mutations
mutation insertConversation($object: conversations_insert_input!)
mutation insertConversationUsers($objects: [conversation_users_insert_input!]!)

# Message mutations
mutation insertMessages($objects: [messages_insert_input!]!)
```

### GraphQL Subscriptions

```graphql
# Real-time message updates
subscription messagesSubscription($conversationId: Int!, $limit: Int!, $offset: Int!, $order_by: order_by!)
```

### Hasura Endpoints

| Environment | URL |
|-------------|-----|
| Production | `https://alert-bullfrog-61.hasura.app/v1/graphql` |
| Local | `http://localhost:8083/v1/graphql` |
| Device (Android emulator) | `http://10.0.2.2:8083/v1/graphql` |

---

## Authentication

### Firebase Auth Integration

```typescript
// Firebase config loaded from environment variables
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  // ...
};

// Auth persistence using AsyncStorage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
```

### JWT Token Flow

1. **Firebase** issues JWT tokens after successful authentication
2. **Token contains** user UID in the `sub` claim
3. **Hasura validates** tokens using Firebase's public JWKS endpoint
4. **Claims mapping** extracts `x-hasura-user-id` from token

### Hasura JWT Configuration

```json
{
  "type": "RS256",
  "jwk_url": "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
  "claims_map": {
    "x-hasura-allowed-roles": ["user"],
    "x-hasura-default-role": "user",
    "x-hasura-user-id": { "path": "$.sub" }
  },
  "audience": "hasura-auth-4f0a3",
  "issuer": "https://securetoken.google.com/hasura-auth-4f0a3"
}
```

---

## State Management

### Zustand Stores

```typescript
// Authentication state
useAuthStore = {
  user: User | null,           // Firebase user object
  dbUser: DbUser | null,       // Database user with ID
  auth: Auth | null,           // Firebase Auth instance
  isLoggedIn: boolean,
  initialized: boolean,
  appRegister: (credentials) => Promise,
  appLogin: (credentials) => Promise,
  appSignOut: () => Promise,
}

// Shopping cart state
useCartStore = {
  products: Product[],
  addProduct: (product) => void,
  removeProduct: (id) => void,
  emptyCart: () => void,
}

// Error handling state
useErrorStore = {
  error: AppError | undefined,
  setError: (error) => void,
  clearError: () => void,
}
```

### Error Type System

```typescript
type AppError =
  | FirebaseAuthError    // Authentication errors
  | GraphQLError         // API errors
  | NetworkError         // Connection errors
  | ValidationError      // Input validation errors
  | GenericError;        // Catch-all
```

---

## Real-time Features

### WebSocket Connection

Apollo Client maintains a WebSocket connection for subscriptions:

```typescript
const wsLink = new GraphQLWsLink(
  createClient({
    url: 'wss://alert-bullfrog-61.hasura.app/v1/graphql',
    connectionParams: async () => ({
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }),
  }),
);
```

### Message Subscription

Real-time chat updates are handled via GraphQL subscriptions:

```typescript
const { data } = useMessagesSubscriptionSubscription({
  variables: {
    conversationId,
    limit: 50,
    offset: 0,
    order_by: Order_By.Desc,
  },
});
```

---

## Infrastructure

### Local Development Stack

```yaml
# docker-compose.yaml
services:
  postgres:
    image: postgres:15
    ports:
      - '5434:5432'

  graphql-engine:
    image: hasura/graphql-engine:v2.33.0
    ports:
      - '8083:8083'
    environment:
      HASURA_GRAPHQL_DATABASE_URL: postgres://...
      HASURA_GRAPHQL_ADMIN_SECRET: ${HASURA_ADMIN_SECRET}
      HASURA_GRAPHQL_JWT_SECRET: ${HASURA_GRAPHQL_JWT_SECRET}
```

### Production Infrastructure

| Service | Provider |
|---------|----------|
| Database | Hasura Cloud (managed PostgreSQL) |
| GraphQL API | Hasura Cloud |
| Authentication | Firebase Auth |
| Serverless Functions | Firebase Functions |
| Hosting (Web) | Firebase Hosting |
| Mobile Distribution | Expo EAS |

---

## Development Workflow

### Available Scripts

```bash
# Start UI development server
npm start

# Start local infrastructure (PostgreSQL + Hasura)
npm run infra

# Open Hasura console
npm run hasura

# Apply database migrations
npm run update-schema

# Generate GraphQL types
npm run codegen

# Run Fastify server
npm run main-server

# Deploy Firebase functions
npm run firebase:deploy
```

### Development Setup

1. **Start infrastructure**: `npm run infra`
2. **Apply migrations**: `npm run update-schema`
3. **Start UI**: `npm start`
4. **Open browser**: http://localhost:8081

### Code Generation

GraphQL Codegen automatically generates TypeScript types:

```bash
npm run codegen
```

Generated files:
- `apps/ui/src/graphql/__generated__/graphql.tsx`
- `apps/ui/src/graphql/__generated__/gql.ts`

---

## Security Considerations

### Environment Variables

Sensitive values stored in `.env` files (not committed):
- Firebase API keys
- Hasura admin secret
- Database credentials

### Row-Level Security

Hasura enforces permissions based on JWT claims:
- Users can only read their own data
- Users can only modify their own records
- Admin access requires admin secret header

### Token Refresh

Automatic token refresh before expiration:

```typescript
async function getAccessToken(tokenManager) {
  if (isTokenExpired(tokenManager.expirationTime)) {
    return await auth.currentUser?.getIdToken(true);
  }
  return tokenManager.accessToken;
}
```

---

## Future Considerations

### Potential Improvements

1. **Testing**: Add unit and integration tests
2. **Error Boundaries**: Implement React error boundaries
3. **Offline Support**: Add offline-first capabilities
4. **Push Notifications**: Implement via Firebase Cloud Messaging
5. **Image Upload**: Add product/profile image uploads
6. **Order Workflow**: Complete order management flow

### Scalability

- Hasura scales horizontally
- PostgreSQL can be upgraded to managed service
- Consider caching layer (Redis) for high-traffic scenarios

---

## References

- [Expo Documentation](https://docs.expo.dev/)
- [Hasura Documentation](https://hasura.io/docs/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Nx Documentation](https://nx.dev/getting-started/intro)
