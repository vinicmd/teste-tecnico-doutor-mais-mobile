import { useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Modal } from 'react-native'
import api from '../../api/connection'
import * as S from './style'

interface CourseParams {
  id: number
}


export function Course({navigation}: any) {
  const [code, setCode] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const route = useRoute()

  function handleOpenExcludeModal() {
    setIsVisible(true)
  }

  function handleCloseExcludeModal() {
    setIsVisible(false)
  }



  const params = route.params as CourseParams

  useEffect(() => {
    api.get(`curso/${params.id}`).then(response => {
      setCode(response.data.idcurso.toString())
      setTitle(response.data.ds_titulo)
      setDescription(response.data.ds_descricao)
    })
  }, [params.id])

  async function handleSubmit() {
    const data = {
      idcurso: Number(code),
      ds_titulo: title,
      ds_descricao: description
    }

    await api.put(`curso/${params.id}`, data)
    navigation.push('Home')
  }

  function handleExclude() {
    api.delete(`curso/${params.id}`)
    navigation.push('Home')
  }

  return (
    <S.Container>
      <S.TitleHeader>
        <S.Title>
          Alterar Curso
        </S.Title>
        <S.Button onPress={(handleSubmit)}>
          <S.ButtonText>Salvar</S.ButtonText>
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
      <S.Exclude>
        <S.ExcludeButton
          onPress={handleOpenExcludeModal}
        >
          <S.ButtonText>Excluir</S.ButtonText>
        </S.ExcludeButton>
      </S.Exclude>

      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          handleOpenExcludeModal
        }}
      >
      <S.ModalContainer>
        <S.ModalTitle>Confirma a Exclusão?</S.ModalTitle>
        <S.ModalText>Deseja remover o registro {title}? </S.ModalText>
        <S.Separator />
        <S.Buttons>
          <S.ButtonCancel onPress={handleCloseExcludeModal} ><S.ButtonText>Cancelar</S.ButtonText></S.ButtonCancel>
          <S.ButtonConfirm onPress={handleExclude} ><S.ButtonText>Confirmar</S.ButtonText></S.ButtonConfirm>
        </S.Buttons>
      </S.ModalContainer>
    </Modal>
    </S.Container>
  )
}
