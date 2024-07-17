import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useId } from 'react';

type Props = {
  label: string;
  value: string;
  readonly?: boolean;
};

export default function LabelInput({ label, value, readonly = true }: Props) {
  const id = useId();
  return (
    <div className='flex justify-between'>
      <Label htmlFor={id} className='pt-3'>
        {label}
      </Label>
      <Input
        id={id}
        type='text'
        placeholder={value}
        readOnly={readonly}
        className='border-0 focus:border-0 focus-visible:ring-0 text-right'
      />
    </div>
  );
}
