import * as S from './style'
interface CoursesProps {
  idcurso: number
  ds_titulo: string
  ds_descricao: string
  onPress: () => void
}
export function Card({idcurso, ds_titulo, ds_descricao, onPress}: CoursesProps, {...rest}){
  return (
    <S.Container onPress={onPress}>
      <S.Code>{idcurso}</S.Code>
      <S.Title>{ds_titulo}</S.Title>
      <S.DescriptionWrapper>
        <S.Description>{ds_descricao}</S.Description>
      </S.DescriptionWrapper>
    </S.Container>
  )
}
