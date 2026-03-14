import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('h-9 rounded-xl border border-border bg-muted px-3 text-sm outline-none focus:ring-2 focus:ring-ring', props.className)} />;
}
