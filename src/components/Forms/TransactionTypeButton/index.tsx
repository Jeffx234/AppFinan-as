import React from 'react'
import {} from 'react-native'
import { Container, Title, Icon, Button } from './styles'

interface IProps {
  title: string;
  type: 'up' | 'down' ;
  isActive: boolean;
  onPress: () => void
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}


export function TransactionTypeButton({ title, type, isActive, onPress ,...rest  } : IProps) {
  return(
    <Container  
      isActive={isActive}
      type={type}
    >
      <Button onPress={onPress} { ...rest }>
        <Icon 
          name={icons[type]} 
          type={type}
        />
        <Title>
            {title}
        </Title>
      </Button>
    </Container>
  )
}