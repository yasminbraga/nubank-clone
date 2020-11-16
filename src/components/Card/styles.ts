import styled from 'styled-components/native'


export const Container = styled.View`
  background: #fff;

  border-radius: 2px;
  padding: 22px;
  margin-bottom: 16px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const HeaderTitle = styled.Text`
  color: #676767;
  font-size: 14px;
  margin-left: 16px;
  font-family: "nunito-sans-regular"
`
interface CardSubtitleProps {
  size?: number;
  color?: string;
  fontFamily?: string;
}

export const CardText = styled.Text<CardSubtitleProps>`
  font-size: ${props => props.size ? props.size: 12}px;
  color: ${props => props.color ? props.color: "#676767"};
  font-family: ${props => props.fontFamily ? props.fontFamily: "nunito-sans-regular"};
`

export const CardButtonOutline = styled.TouchableOpacity`
  border: 0.5px solid #8a05be;
  padding: 12px 14px;
  border-radius: 2.5px;
  margin-top: 14px;
  align-self: flex-start;
  `

export const CardButtonText = styled.Text`
  color: #8a05be;
  text-transform: uppercase;
  font-size: 12px;
  font-family: "nunito-sans-extrabold";
  text-align: center;
`