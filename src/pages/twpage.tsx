import { HeroBullets } from '@/components/Hero'
import React from 'react'
import { Slider } from '@mantine/core'
import styled from '@emotion/styled'
import tw, { theme as tailwindTheme } from 'twin.macro'

const StyledSlider = styled(Slider)`
  .mantine-Slider-bar {
    ${tw`bg-pink-500`}
  }

  .mantine-Slider-thumb {
    ${tw`w-6 h-6 bg-gray-200 border-4 border-pink-400`}
  }
`

export default function twpage() {
  return (
    <>
      <HeroBullets />
      <div className="container w-1/3 mx-auto mb-20">
        <StyledSlider defaultValue={40} />
      </div>
    </>
  )
}
