import { useState } from 'react'
import api from '../../api/connection'
import * as S from './style'


export function NewCourse({navigation}: any) {
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit() {
    const data = {
      idcurso: Number(code),
      ds_titulo: title,
      ds_descricao: description
    }

    await api.post('curso', data)
    setCode('')
    setTitle('')
    setDescription('')
    navigation.push('Home')
  }

  return (
    <S.Container>
      <S.TitleHeader>
        <S.Title>
          Novo Curso
        </S.Title>
        <S.Button onPress={(handleSubmit)}>
          <S.ButtonText>+ Adicionar</S.ButtonText>
        </S.Button>
      </S.TitleHeader>
      <S.Separator />
      <S.Form>
        <S.InputWrapper>
          <S.InputText>Codigo</S.InputText>
          <S.Input
            value={code}
            onChangeText={text => setCode(text)}
            />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputText>Título</S.InputText>
          <S.Input
             value={title}
             onChangeText={setTitle}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputText>Descrição</S.InputText>
          <S.TextArea
             onChangeText={setDescription}
            value={description}
            multiline
          />
        </S.InputWrapper>
      </S.Form>
    </S.Container>
  )
}
