import { ScrollView, Text, View, Alert } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'
import { api } from '../lib/axios'

import { HabitDay, DAY_SIZE } from '../components/HabitDay'
import { Header } from '../components/Header'
import { useCallback, useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import dayjs from 'dayjs'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSize = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length

type SummaryProps = {
  id: string;
  date: string;
  amount: number;
  completed: number;
}[]

export function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [summary, setSummary] = useState<SummaryProps | null>(null)

  const { navigate } = useNavigation()

  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get('/summary')
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops!', 'Não foi possível carregar os hábitos.')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchData()
  }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

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
        {
          summary && (
            <View className='flex-row flex-wrap'>
              {datesFromYearStart.map(date => {
                const dayWithHabits = summary.find(day => {
                  return dayjs(date).isSame(day.date, 'day')
                })

                return (
                  <HabitDay
                    key={date.toISOString()}
                    date={date}
                    amountOfHabits={dayWithHabits?.amount}
                    amountCompleted={dayWithHabits?.completed}
                    onPress={() => navigate('Habit', { date: date.toISOString() })}
                  />
                )
              })}

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
          )
        }
      </ScrollView>
    </View >
  )
} 