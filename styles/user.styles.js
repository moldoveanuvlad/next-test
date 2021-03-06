import styled from '@emotion/styled'
import tw from 'twin.macro'

export const BackButton = styled('button')`
   ${tw`cursor-pointer bg-yellow-200 px-4 py-2`}
   ${({ disabled }) => disabled === true ? tw` bg-gray-200 cursor-auto` : ''}
`
