import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header,
  UserInfo,
  UserWrapper,
  UserGreeting,
  UserName,
  Photo,
  User,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton

} from './styles'


export interface DataListProps extends  TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
     type: 'positive',
     title: "Desenvolvimento de site",
     amount: "R$ 12.000,00",
     category : {
     name: 'Vendas',
     icon: 'dollar-sign'
    },
     date : "27/04/2022",
  },

  {
    id: '2',
    type: 'negative',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category : {
    name: 'Alimentação',
    icon: 'coffee'
   },
    date : "27/04/2022",
 },


 {
   id: '3',
   type: 'negative',
  title: "Aluguel do apartamento",
  amount: "R$ 1.200,00",
  category : {
  name: 'casa',
  icon: 'shopping-bag'
 },
  date : "27/04/2022",
},


]


  return(
    <Container>
        <Header>  
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/86368923?v=4'}} />
              <User>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Jeferson</UserName>
              </User>
            </UserInfo>
            <LogoutButton onPress={() => {}}>
              <Icon name="power" />
            </LogoutButton>
          </UserWrapper>
        </Header>
        <HighlightCards>
          <HighlightCard 
          title="Entradas" 
          amount="R$17.000,00" 
          lastTransaction="Ultima entrada dia 13"
          type="up" 
          />

          <HighlightCard 
            title="Saídas" 
            amount="R$1.259,00" 
            lastTransaction= "Ultima entrada dia 16"
            type="down"
          />

          <HighlightCard 
            title="Total" 
            amount="R$16.141,00" 
            lastTransaction="Ultima entrada dia 13"
            type="total"
          />

        </HighlightCards>

        <Transactions >
          <Title>  Listagem </Title>

          <TransactionList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} /> }
          />
        </Transactions>
    </Container>
  )
}
