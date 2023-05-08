import { useState } from 'react'
import { useClickOutside } from '@mantine/hooks'
import { Link, RichTextEditor } from '@mantine/tiptap'
import { Color } from '@tiptap/extension-color'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import tw, { css } from 'twin.macro'
import ColorControl from './ColorControl'

export default function TextEditor() {
  const [clickContent, setClickContent] = useState(false)
  const ref = useClickOutside(() => setClickContent(false))
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Link,
      Color,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content:
      '<p>SThis starter Next.js project includes a minimal setup for server side rendering, if you want to learn more on Mantine + Next.js integration follow this guide. To get started edit index.tsx file.</p>',
    // editable: false,
  })

  return (
    <div ref={ref}>
      <RichTextEditor
        editor={editor}
        withTypographyStyles={false}
        css={[
          tw`border-0`,
          css`
            .ProseMirror {
              padding: 4px;
            }
            .ProseMirror p {
              margin: 0;
            }
            .mantine-RichTextEditor-controlsGroup {
              ${tw`absolute left-0 z-50 rounded -top-6 bg-amber-900`}
            }
          `,
        ]}
      >
        {clickContent && (
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.Underline />
            <RichTextEditor.Link />
            <ColorControl />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.AlignCenter />
            <RichTextEditor.AlignJustify />
            <RichTextEditor.AlignRight />
            <RichTextEditor.AlignLeft />
          </RichTextEditor.ControlsGroup>
        )}

        <RichTextEditor.Content
          onClick={() => {
            setClickContent(true)
          }}
        />
      </RichTextEditor>
    </div>
  )
}
