import { useEffect, useState } from "react";
import api from "../../api/connection";
import { Card } from "../../component/Card";
import * as S from "./style";

interface CoursesProps {
  idcurso: number
  ds_titulo: string
  ds_descricao: string
}

export function Home({navigation}: any) {
  const [courses, setCourses] = useState<CoursesProps[]>([])

  useEffect(() => {
    api.get('/curso').then(response => {
      setCourses(response.data)
    })
  }, [])

  function handleNavigateCourse(id: number) {
    return navigation.navigate('Course', { id })
  }

  return (
    <S.Container>
      <S.TitleHeader>
        <S.Title>
          Cursos
        </S.Title>
        <S.Button onPress={() => navigation.navigate('NewCourse')}>
          <S.ButtonText>+ Adicionar</S.ButtonText>
        </S.Button>
      </S.TitleHeader>
      <S.Separator />
      <S.Cards showsVerticalScrollIndicator={false}>
        {courses.map((course) =>{
          return (
            <Card
              key={course.idcurso}
              onPress={() => handleNavigateCourse(course.idcurso)}
              ds_descricao={course.ds_descricao}
              ds_titulo={course.ds_titulo}
              idcurso={course.idcurso}

            />
          )
        })}
      </S.Cards>
    </S.Container>
  )
}
