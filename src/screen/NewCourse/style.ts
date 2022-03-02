import { TextInput } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const TitleHeader = styled.View`
  width: 100%;
  height: 15%;
  margin-top: 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 0px 12px;
`

export const Title = styled.Text`
  font-size: 36px;
`

export const Button = styled.TouchableOpacity`

  padding: 12px 20px;
  border-width: 0;
  background-color: #207868;

  border-radius: 5px;

`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #FFF;

`

export const Separator = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 2px;
  background-color: #9EADBA;
`

export const Form = styled.View`
  width: 90%;
  margin: 0 auto;
  padding: 24px 0;
`

export const InputWrapper = styled.View`
  padding: 10px 0;
`


export const InputText = styled.Text`
  font-size: 24px;
`


export const Input = styled(TextInput)`
  font-size: 24px;
  padding: 12px;

  border: 1px solid #9EADBA;
`

export const TextArea = styled(TextInput)`
  font-size: 24px;
  padding: 12px;

  border: 1px solid #9EADBA;
`
