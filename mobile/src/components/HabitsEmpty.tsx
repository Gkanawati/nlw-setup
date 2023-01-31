import { useNavigation } from '@react-navigation/native'
import { View, Text } from 'react-native'

export default function HabitsEmpty() {

  const { navigate } = useNavigation()

  return (
    <View>
      <Text className='text-zinc-400 text-base text-center'>
        Você ainda não está monitorando nenhum hábito,{' '}

        <Text
          className='text-violet-400 text-base underline active:violet-500'
          onPress={() => navigate('New')}
        >
          comece criando um.
        </Text>
      </Text>
    </View>
  )
}