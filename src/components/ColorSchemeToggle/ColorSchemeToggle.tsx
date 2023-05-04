import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useHotkeys } from '@mantine/hooks'
import tw from 'twin.macro'

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { theme, setTheme } = useTheme()

  function setThemes() {
    if (theme !== colorScheme) {
      setTheme(colorScheme)
    }
    toggleColorScheme()
    dark ? setTheme('light') : setTheme('dark')
  }
  useHotkeys([['mod+J', () => setThemes()]])

  return (
    <Group position="center" mt="xl">
      <ActionIcon
        onClick={() => setThemes()}
        size="xl"
        color={dark ? 'yellow' : 'blue'}
        css={[dark ? tw`bg-gray-700/30` : tw`bg-gray-300/30`]}
      >
        {dark ? (
          <IconSun size={20} stroke={1.5} />
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  )
}
