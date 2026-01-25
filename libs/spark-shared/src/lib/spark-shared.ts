import { User } from 'firebase/auth';

export type Product =
  | {
      id?: number;
      name: string;
      category: string;
      description: string;
      supplier_id: number;
      price: number;
    }
  | undefined;

export type Credentials = {
  email: string | undefined;
  password: string | undefined;
  displayName?: string;
};

export type UserType = User & {
  stsTokenManager: { accessToken: string | undefined; expirationTime: string };
};

export enum FirebaseErrors {
  AUTH_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  AUTH_INVALID_EMAIL = 'auth/invalid-email',
  AUTH_WRONG_PASSWORD = 'auth/wrong-password',
  AUTH_USER_NOT_FOUND = 'auth/user-not-found',
  AUTH_INVALID_PASSWORD = 'auth/invalid-password',
  AUTH_INVALID_CREDENTIAL = 'auth/invalid-credential',
  AUTH_TOO_MANY_REQUESTS = 'auth/too-many-requests',
  AUTH_NETWORK_REQUEST_FAILED = 'auth/network-request-failed',
}

/**
 * Discriminated union type for application errors
 */
export type AppError =
  | FirebaseAuthError
  | GraphQLError
  | NetworkError
  | ValidationError
  | GenericError;

export interface FirebaseAuthError {
  type: 'firebase_auth';
  code: FirebaseErrors | string;
  message: string;
  originalError?: unknown;
}

export interface GraphQLError {
  type: 'graphql';
  message: string;
  path?: string[];
  originalError?: unknown;
}

export interface NetworkError {
  type: 'network';
  message: string;
  status?: number;
  originalError?: unknown;
}

export interface ValidationError {
  type: 'validation';
  field: string;
  message: string;
}

export interface GenericError {
  type: 'generic';
  message: string;
  originalError?: unknown;
}

/**
 * Type guard to check if an error is a Firebase error
 */
export function isFirebaseError(
  error: unknown,
): error is { code: string; message: string; name: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    'name' in error &&
    (error as { name: string }).name === 'FirebaseError'
  );
}

/**
 * Normalize any error into an AppError
 */
export function normalizeError(error: unknown): AppError {
  if (isFirebaseError(error)) {
    return {
      type: 'firebase_auth',
      code: error.code,
      message: error.message,
      originalError: error,
    };
  }

  if (error instanceof Error) {
    if (error.message.includes('GraphQL')) {
      return {
        type: 'graphql',
        message: error.message,
        originalError: error,
      };
    }
    if (error.message.includes('network') || error.message.includes('fetch')) {
      return {
        type: 'network',
        message: error.message,
        originalError: error,
      };
    }
    return {
      type: 'generic',
      message: error.message,
      originalError: error,
    };
  }

  if (typeof error === 'string') {
    return {
      type: 'generic',
      message: error,
    };
  }

  return {
    type: 'generic',
    message: 'An unexpected error occurred',
    originalError: error,
  };
}

/**
 * Get user-friendly error message
 */
export function getErrorMessage(error: AppError): string {
  const firebaseErrorMessages: Record<string, string> = {
    [FirebaseErrors.AUTH_EMAIL_ALREADY_IN_USE]:
      'This email is already registered',
    [FirebaseErrors.AUTH_INVALID_EMAIL]: 'Please enter a valid email address',
    [FirebaseErrors.AUTH_WRONG_PASSWORD]: 'Incorrect password',
    [FirebaseErrors.AUTH_USER_NOT_FOUND]: 'No account found with this email',
    [FirebaseErrors.AUTH_INVALID_PASSWORD]: 'Password is invalid',
    [FirebaseErrors.AUTH_INVALID_CREDENTIAL]: 'Invalid email or password',
    [FirebaseErrors.AUTH_TOO_MANY_REQUESTS]:
      'Too many attempts. Please try again later',
    [FirebaseErrors.AUTH_NETWORK_REQUEST_FAILED]:
      'Network error. Please check your connection',
  };

  switch (error.type) {
    case 'firebase_auth':
      return firebaseErrorMessages[error.code] || error.message;
    case 'validation':
      return error.message;
    case 'network':
      return 'Network error. Please check your connection';
    case 'graphql':
      return 'Failed to load data. Please try again';
    case 'generic':
    default:
      return error.message || 'An unexpected error occurred';
  }
}
