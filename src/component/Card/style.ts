import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 250px;

  margin: 8px 0;
  padding: 12px;

  align-items: center;
  flex-direction: column;

  border: 2px solid #C3CFD9;
`

export const Code = styled.Text`
  font-size: 28px;

  margin-bottom: 8px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 12px;
`

export const DescriptionWrapper = styled.View`
  width: 100%;
  height: 130px;

  border: 2px solid #C3CFD9;
  border-radius: 3px;

  padding: 12px;
`

export const Description = styled.Text`
  font-size: 24px;
`
