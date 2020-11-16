import React from 'react'

import {View, ScrollView} from 'react-native'
import {Feather} from '@expo/vector-icons'

import Card from '../Card'

import { CardHeader, HeaderTitle, CardText, CardButtonOutline, CardButtonText } from '../Card/styles'

const AccountInfo: React.FC = () => {
return (

  <ScrollView style={{ paddingHorizontal: 16}}>
    <Card>
      <CardHeader>
        <Feather name="credit-card" color="#676767" size={22}/>
        <HeaderTitle>Cartão de Crédito</HeaderTitle>
      </CardHeader>
      <CardText style={{marginBottom: 10}}>Fatura atual</CardText>

      <CardText style={{marginBottom: 4}} size={24} color="#26a1dd" fontFamily="nunito-sans-bold">
        R$ 400,00
      </CardText>

      <View style={{flexDirection: "row"}}>
        <CardText size={13} color="#333">Limite Disponível </CardText>
        <CardText size={13} color="#237d45" fontFamily="nunito-sans-bold">
          R$ 600,00
        </CardText>
      </View>

    </Card>

    <Card>
      <CardHeader>
        <Feather name="dollar-sign" color="#676767" size={22}/>
        <HeaderTitle>Empréstimo</HeaderTitle>
      </CardHeader>

      <CardText size={15} color="#333" style={{marginTop: 10}}>
        Valor disponível de até
      </CardText>
      <CardText size={15} color="#333" fontFamily="nunito-sans-bold">
        R$ 9.400,00
      </CardText>

      <CardButtonOutline>
        <CardButtonText>simular empréstimo</CardButtonText>
      </CardButtonOutline>

    </Card>

    <Card>
      <CardHeader>
        <Feather name="dollar-sign" color="#676767" size={22}/>
        <HeaderTitle>Conta</HeaderTitle>
      </CardHeader>

      <CardText style={{marginBottom: 10}}>Saldo disponível</CardText>

      <CardText style={{marginBottom: 4}} size={24} color="#333" fontFamily="nunito-sans-bold">
        R$ 444,00
      </CardText>
    </Card>

    <Card style={{marginBottom: 100}}>
      <CardHeader>
        <Feather name="gift" color="#8a05be" size={24}/>
        <CardText size={20} color="#8a05be" style={{marginLeft: 16}} fontFamily="nunito-sans-bold">
          Rewards
        </CardText>
      </CardHeader>

      <CardText size={13} color="#333" style={{marginTop: 10}}>
        Apague compras com pontos que nunca expiram
      </CardText>

      <CardButtonOutline>
        <CardButtonText>conhecer</CardButtonText>
      </CardButtonOutline>

    </Card>

  </ScrollView>
)
}

export default AccountInfo