import { Button, ColorPicker, Group, Popover } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { RichTextEditor, useRichTextEditorContext } from '@mantine/tiptap'
import { IconCircleOff, IconDeviceFloppy, IconTypography } from '@tabler/icons-react'
import tw, { css } from 'twin.macro'

export default function ColorControl() {
  const { editor } = useRichTextEditorContext()
  const [opened, { toggle, close }] = useDisclosure(false)
  const currentColor = editor?.getAttributes('textStyle').color || '#ff0000'

  const handleChange = (value: string, shouldClose = true) => {
    ;(editor.chain() as any).focus().setColor(value).run()
    shouldClose && close()
  }

  const handleClear = () => {
    ;(editor.chain() as any).focus().unsetColor().run()
    close()
  }

  return (
    <>
      <Popover opened={opened} trapFocus onClose={close}>
        <Popover.Target>
          <RichTextEditor.Control
            onClick={toggle}
            aria-label="Change Color"
            title="Change Color"
          >
            <div tw="flex flex-col w-full p-1 justify-center items-center gap-[0.2px]">
              <IconTypography size={12} stroke={1.5} />
              <div
                css={[
                  tw`h-[3px] w-full mx-auto`,
                  css`
                    background-color: ${currentColor};
                  `,
                ]}
              ></div>
            </div>
          </RichTextEditor.Control>
        </Popover.Target>

        <Popover.Dropdown>
          <ColorPicker
            value={currentColor}
            onChange={(value) => handleChange(value, false)}
            swatchesPerRow={10}
            format="hex"
            swatches={[
              '#25262b',
              '#868e96',
              '#fa5252',
              '#e64980',
              '#be4bdb',
              '#7950f2',
              '#4c6ef5',
              '#228be6',
              '#15aabf',
              '#12b886',
              '#40c057',
              '#82c91e',
              '#fab005',
              '#fd7e14',
            ]}
          />

          <Group position="center" spacing="xs" grow mt={15}>
            <Button
              onClick={handleClear}
              size="xs"
              leftIcon={<IconCircleOff stroke={1.5} size="1rem" />}
              variant="outline"
              color="gray"
            >
              Reset
            </Button>
            <Button
              onClick={close}
              variant="filled"
              size="xs"
              // color="gray"
              leftIcon={<IconDeviceFloppy stroke={1.5} size="1rem" />}
            >
              Simpan
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </>
  )
}
