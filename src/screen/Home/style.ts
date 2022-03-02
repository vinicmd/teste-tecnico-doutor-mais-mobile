import { Link } from '@react-navigation/native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #fff;
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
  background-color: #6558F5;

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

export const Cards = styled.ScrollView`
  width: 90%;
  margin: 0 auto;
`

export const LinkTo = styled(Link)`

`
