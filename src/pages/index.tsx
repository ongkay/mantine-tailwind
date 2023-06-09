import { useState } from 'react'
import { Autocomplete, Button, Drawer, Group } from '@mantine/core'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle'
import { Welcome } from '@/components/Welcome/Welcome'
import Formku from '../components/Form'
import TextEditor from '../components/TextEditor/Index'

export default function Demo() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Formku />
      <div className="w-1/3 m-20 mx-auto">
        <TextEditor />
      </div>
      <div className="container mx-auto">
        <Group position="center" spacing="lg" className="my-10">
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Indigo cyan
          </Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
            Lime green
          </Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>
            Teal blue
          </Button>
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
            Orange red
          </Button>
        </Group>

        <Autocomplete
          maw={400}
          mx="auto"
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={['React', 'Angular', 'Svelte', 'Vue']}
          transitionProps={{
            transition: 'pop-top-left',
            duration: 500,
            timingFunction: 'ease',
          }}
        />

        <div className="my-10">
          <Group position="center">
            <Button onClick={() => setOpened(true)}>Open Drawer</Button>
          </Group>

          <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Select your favourite lib"
            padding="xl"
            size="xl"
          >
            <Autocomplete
              label="Your favorite framework/library"
              placeholder="Pick one"
              data={['React', 'Angular', 'Svelte', 'Vue']}
            />
          </Drawer>
        </div>
      </div>
    </>
  )
}
