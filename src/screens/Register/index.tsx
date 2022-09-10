import React, { useState} from 'react';

import { 
  Keyboard,
  Modal, 
  TouchableWithoutFeedback,
  Alert
} from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm } from 'react-hook-form'
import  { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect';


import { 
  Container,
  Header,
  Title,
  Forms,
  Fields,
  TransactionsType
} from './styles'
import { InputForm } from '../../components/Forms/InputForm';

interface FormData {
  name: string;
  amount: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor numérico')
  .positive('O valor não pode ser negativo')
  .required('O valor é obrigatório')
})

export function Register() {
  const [ transactionType , setTransactionType ] = useState('')
  const [ categoryModalOpen, setCategoryModalOpen ] = useState(false)
  const [ category, setCategory ] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

 


  function handleTransactionType( type: 'up' | 'down' ) {
      setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

 
  function handleRegister(form: FormData) {
    if(!transactionType) return Alert.alert('Selectione o tipo de transação')

    if(category.key === 'category') return Alert.alert('Selecione a categoria')

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)

  }


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Forms>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
            />

            <TransactionsType>
              <TransactionTypeButton 
                type="up" 
                title="Income"
                isActive={transactionType === 'up'}
                onPress={() => handleTransactionType('up')}
              />

              <TransactionTypeButton 
                type="down" 
                title="Outcome"
                isActive={transactionType === 'down'}
                onPress={() => handleTransactionType('down')}
              />
            </TransactionsType>
            <CategorySelectButton 
              title={category.name}
              onPress={handleOpenSelectCategoryModal}
            />
            
          </Fields>
          <Button 
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
            />
        </Forms>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          
          />
        </Modal>
      </Container>
   </TouchableWithoutFeedback>
  
  )
}