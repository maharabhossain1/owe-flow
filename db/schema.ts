import {
  pgTable,
  serial,
  text,
  timestamp,
  numeric,
  boolean,
  date,
} from 'drizzle-orm/pg-core';

// Users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkId: text('clerk_id').notNull().unique(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Contacts table
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  userId: serial('user_id')
    .references(() => users.id)
    .notNull(),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Transactions table for both lending and borrowing
export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey(),
  userId: serial('user_id')
    .references(() => users.id)
    .notNull(),
  contactId: serial('contact_id').references(() => contacts.id),
  type: text('type').notNull(), // "lent" or "borrowed"
  amount: numeric('amount').notNull(),
  currency: text('currency').default('USD').notNull(),
  description: text('description'),
  date: date('date').notNull(),
  dueDate: date('due_date'),
  paymentMethod: text('payment_method'),
  status: text('status').default('pending').notNull(), // "pending", "paid", "written_off"
  notes: text('notes'),
  hasReminder: boolean('has_reminder').default(false),
  reminderDate: date('reminder_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
