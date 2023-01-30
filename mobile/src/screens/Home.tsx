import { useNavigation } from '@react-navigation/native'
import { ScrollView, Text, View } from 'react-native'

import { HabitDay, DAY_SIZE } from '../components/HabitDay'
import { Header } from '../components/Header'
import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length

export function Home() {
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {weekDays.map((weekDay, index) => (
          <Text className='text-zinc-400 text-xl text-center font-bold mx-1'
            key={`${weekDay}-${index++}`}
            style={{ width: DAY_SIZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <View className='flex-row flex-wrap'>
          {datesFromYearStart.map(date => (
            <HabitDay
              key={date.toISOString()}
              onPress={() => navigate('Habit', { date: date.toISOString() })}
            />
          ))}

          {amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, i) => (
              <View
                key={i++}
                className='opacity-40 bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800'
                style={{ width: DAY_SIZE, height: DAY_SIZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View >
  )
} 