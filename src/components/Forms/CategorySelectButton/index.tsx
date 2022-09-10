import React from 'react'
import { 
  Container,
  Icon,
  Category

} from './styles'

interface IProps { 
  title: string;
  onPress: () => void;
}

export function CategorySelectButton( { title, onPress }: IProps ) {
  return (
    <Container onPress={onPress}>
      <Category>
        { title }
      </Category>
      <Icon name="chevron-down"/>
    </Container>
  )
}