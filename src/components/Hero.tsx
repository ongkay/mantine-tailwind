import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import tw, { theme as tailwindTheme } from 'twin.macro'

const useStyles = createStyles((theme) => ({
  content: {
    ...tw`max-w-full lg:(max-w-lg mr-8)`,
  },

  title: {
    color:
      theme.colorScheme === 'dark'
        ? tailwindTheme`colors.white`
        : tailwindTheme`colors.black`,

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    ...tw`text-3xl font-black leading-tight md:text-5xl`,
  },

  image: {
    ...tw`flex-1 invisible lg:visible`,
  },

  highlight: {
    ...tw`relative px-4 rounded-lg bg-blue-800/60`,
  },
}))

export function HeroBullets() {
  const { classes } = useStyles()
  return (
    <div>
      <Container>
        <div tw="flex justify-between py-40">
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React{' '}
              <br /> components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster
              than ever – Mantine includes more than 120 customizable
              components and hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT
                license, you can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only
                when user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button size="md" tw="flex-1 md:flex-none rounded-full">
                Get started
              </Button>
              <Button
                variant="default"
                size="md"
                tw="flex-1 md:flex-none rounded-full"
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image
            src={
              'https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg'
            }
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  )
}
