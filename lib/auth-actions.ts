'use server';

// This file contains server actions for authentication

type SignInCredentials = {
  email: string;
  password: string;
};

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type AuthResult = {
  success: boolean;
  error?: string;
};

export async function signIn(
  credentials: SignInCredentials
): Promise<AuthResult> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real app, you would validate credentials against your database
  // For demo purposes, let's simulate a successful login for any valid input
  if (credentials.email && credentials.password.length >= 8) {
    return { success: true };
  }

  return {
    success: false,
    error: 'Invalid email or password. Please try again.',
  };
}

export async function register(data: RegisterData): Promise<AuthResult> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real app, you would create a new user in your database
  // For demo purposes, let's simulate a successful registration
  if (data.email && data.password.length >= 8) {
    return { success: true };
  }

  return {
    success: false,
    error: 'Registration failed. This email may already be in use.',
  };
}

export async function forgotPassword(email: string): Promise<AuthResult> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real app, you would send a password reset email
  // For demo purposes, let's simulate a successful request
  if (email) {
    return { success: true };
  }

  return {
    success: false,
    error: 'Failed to send reset email. Please try again.',
  };
}
