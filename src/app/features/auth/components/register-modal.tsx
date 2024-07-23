'use client'

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'

import { Input } from '@/app/components/form/input'
import { Button } from '@/app/components/ui/button'
import * as D from '@/app/components/ui/modal'

import { useRegisterModal } from '../hooks/useRegisterModal'

export function RegisterModal() {
  const registerModal = useRegisterModal()

  const formMethods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const handleSubmit: SubmitHandler<any> = async (data) => {
    console.log(data)
  }

  return (
    <FormProvider {...formMethods}>
      <D.DialogRoot
        open={registerModal.isOpen}
        onOpenChange={registerModal.onClose}
      >
        <D.DialogContent>
          <D.DialogHeader>
            <D.DialogTitle>Register</D.DialogTitle>
          </D.DialogHeader>

          <D.DialogBody className="gap-4">
            <div className="flex flex-col">
              <span className="text-start text-2xl font-bold">
                Welcome to Airbnb
              </span>
              <span className="mt-2 font-light text-neutral-500">
                Create an account!
              </span>
            </div>

            <Input name="email" type="email" label="Email" />
            <Input name="name" label="Name" />
            <Input name="password" type="password" label="Password" />

            <Button>Sign up</Button>
          </D.DialogBody>

          <D.DialogFooter className="gap-4">
            <Button className="relative" variant="outline">
              <FcGoogle className="absolute left-4 top-4 h-4 w-4" /> Continue
              with Google
            </Button>

            <div className="flex flex-row items-center justify-center gap-2 text-center font-light text-neutral-500">
              <span>Already have an account?</span>
              <span className="cursor-pointer text-neutral-800 hover:underline">
                Log in
              </span>
            </div>
          </D.DialogFooter>
        </D.DialogContent>
      </D.DialogRoot>
    </FormProvider>
  )
}
