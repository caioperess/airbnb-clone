'use client'

import { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/app/utils/cn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, name, ...props }, ref) => {
    const {
      formState: { errors },
    } = useFormContext()

    return (
      <div className="relative flex w-full flex-col items-start justify-start">
        <input
          id={name}
          name={name}
          type={type}
          className={cn(
            `${errors[name] ? 'focus:border-rose-500' : 'focus:border-black'} ${errors[name] ? 'border-rose-500' : 'border-neutral-300'} peer w-full rounded-md border-2 bg-white p-4 pt-5 text-sm font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70`,
            className,
          )}
          ref={ref}
          placeholder=" "
          {...props}
        />

        <label
          htmlFor={name}
          className={`${errors[name] ? 'text-rose-500' : 'text-zinc-400'} absolute left-4 top-4 z-10 origin-[0] -translate-y-3 transform text-sm transition peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75`}
        >
          {label}
        </label>

        {errors[name] && (
          <span className="mt-1 text-sm text-rose-500">
            {errors[name]?.message as string}
          </span>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
