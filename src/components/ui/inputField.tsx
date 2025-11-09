import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { InputFieldProps } from '@/lib/component-types/inputField';

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  register,
  error,
  disabled,
}: InputFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`${Icon ? "pl-10 pr-3" : "px-3"}`}
          {...register(id)}
        />
      </div>
      {error && <p className="">{error.message}</p>}
    </div>
  )
}

export default InputField
