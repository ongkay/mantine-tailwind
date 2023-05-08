import { useState } from 'react'
import { Box, Button, Code, PasswordInput, TextInput } from '@mantine/core'
import { hasLength, isEmail, isInRange, matchesField, useForm } from '@mantine/form'

export default function Formku() {
  const [submittedValues, setSubmittedValues] = useState('')

  const form = useForm({
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 33,
      email: 'emailku@gmail.com',
      password: '',
      confirmPassword: '',
    },

    transformValues: ({ firstName, lastName, age, password, email }) => ({
      firstName,
      lastName,
      email,
      fullName: `${firstName} ${lastName}`,
      age: Number(age) || 0,
      password,
    }),

    validate: {
      firstName: hasLength({ min: 2 }, 'firstName must have 2  or more characters'),
      lastName: hasLength({ min: 2 }, 'lastName must have 2  or more characters'),
      age: isInRange({ min: 18, max: 100 }, 'age must be between 18 and 100'),
      email: isEmail('Invalid email'),
      password: hasLength({ min: 3 }, 'password must have 3  or more characters'),
      confirmPassword: matchesField('password', 'Passwords are not the same'),
    },
  })

  return (
    <Box maw={400} mx="auto">
      <form
        onSubmit={form.onSubmit((values) =>
          setSubmittedValues(JSON.stringify(values, null, 2))
        )}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last name"
          placeholder="Last name"
          mt="md"
          {...form.getInputProps('lastName')}
        />
        <TextInput
          label="Email Address"
          placeholder="Your Email"
          mt="md"
          {...form.getInputProps('email')}
        />
        <TextInput
          type="number"
          label="Age"
          placeholder="Age"
          mt="md"
          {...form.getInputProps('age')}
        />
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />
        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  )
}
