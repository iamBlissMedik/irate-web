import { LucideIcon } from 'lucide-react';
import { FieldError } from 'react-hook-form';

export interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: LucideIcon;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
  error?: FieldError;
  disabled?: boolean
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}