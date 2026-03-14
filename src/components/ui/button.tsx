import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('rounded-xl border border-border bg-accent px-3 py-2 text-sm font-medium hover:bg-accent/80', className)} {...props} />;
}
