import { TextInput, TouchableOpacity } from 'react-native'
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

export const Exclude = styled.View`
  position: absolute;
  width: 100%;
  bottom: 24px;
  align-items: center;
`

export const ExcludeButton = styled.TouchableOpacity`
  width: 100px;
  height:50px;

  align-items: center;

  padding: 12px 20px;
  border-width: 0;
  background-color: #D3455B;

  border-radius: 5px;

`

export const ModalContainer = styled.View`
  width: 100%;
  height: 100%;
`

export const ModalTitle = styled.Text`
  padding-top: 12px;
  font-size: 36px;
  font-weight: 400;
  color: #293845;
  text-align: center;
`

export const ModalText = styled.Text`
  padding: 48px 0;
  font-size: 24px;
  font-weight: 400;
  color: #293845;
  text-align: center;
`

export const Buttons = styled.View`
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const ButtonCancel = styled(TouchableOpacity)`
  margin-left: 12px;
  font-size: 24px;
  padding: 12px 20px;
  border-width: 0;
  background-color: #2C88D9;
  color: #fff;
  border-radius: 5px;
`

export const ButtonConfirm = styled(TouchableOpacity)`
  margin-left: 12px;
  font-size: 24px;
  padding: 12px 20px;
  border-width: 0;
  background-color: #207868;
  color: #fff;
  border-radius: 5px;
`
