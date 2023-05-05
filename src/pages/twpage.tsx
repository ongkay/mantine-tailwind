import React from 'react'
import styled from '@emotion/styled'
import { Slider } from '@mantine/core'
import tw, { css } from 'twin.macro'
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle'
import { HeroBullets } from '@/components/Hero'

export default function twpage() {
  return (
    <>
      <HeroBullets />
      <ColorSchemeToggle />
      <div className="container flex flex-col gap-10 mx-auto mt-10 w-96">
        <Slider
          defaultValue={40}
          classNames={{
            bar: 'bg-red-500 dark:bg-pink-500',
            thumb: 'w-6 h-6 bg-gray-200 border-4 border-red-500 dark:border-pink-400',
          }}
        />

        <Slider
          defaultValue={40}
          styles={{
            bar: tw`bg-red-500 dark:bg-pink-500`,
            thumb: tw`w-6 h-6 bg-gray-200 border-4 border-red-500 dark:border-pink-400`,
          }}
        />

        <Slider
          defaultValue={40}
          css={[
            css`
              .mantine-Slider-bar {
                ${tw`bg-red-500 dark:bg-pink-500`}
              }

              .mantine-Slider-thumb {
                ${tw`w-6 h-6 bg-gray-200 border-4 border-red-500 dark:border-pink-400`}
              }
            `,
          ]}
        />

        <SliderComponent />

        <StyledSlider defaultValue={40} />
      </div>
    </>
  )
}

const SliderComponent = () => (
  <>
    <Slider
      defaultValue={40}
      css={[
        css`
          .mantine-Slider-bar {
            ${tw`bg-blue-500 dark:bg-pink-500`}
          }

          .mantine-Slider-thumb {
            ${tw`w-6 h-6 bg-gray-200 border-4 border-blue-500 dark:border-pink-400`}
          }
        `,
      ]}
    />
  </>
)

const StyledSlider = styled(Slider)`
  .mantine-Slider-bar {
    ${tw`bg-red-500 dark:bg-pink-500`}
  }

  .mantine-Slider-thumb {
    ${tw`w-6 h-6 bg-gray-200 border-4 border-red-500 dark:border-pink-400`}
  }
`
