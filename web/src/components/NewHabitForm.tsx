import { FormEvent, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react';
import { api } from '../lib/axios';

const availableWeekDays = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

export function NewHabitForm() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  async function createNewHabit(event: FormEvent) {
    event.preventDefault()

    if (!title || weekDays.length === 0) {
      return
    }

    await api.post('habits', {
      title,
      weekDays
    })

    alert('Hábito criado com sucesso!')

    setTitle('')
    setWeekDays([])
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)

      setWeekDays(weekDaysWithRemovedOne)
    } else {
      setWeekDays(prevState => [...prevState, weekDay])
    }
  }

  return (
    <form onSubmit={createNewHabit} className='w-full flex flex-col mt-6'>
      <label htmlFor="title" className='font-semibold leading-tight'>
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        name="title"
        id="title"
        placeholder='ex.: Exercícios, dormir bem, etc...'
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900'
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />

      <label
        htmlFor=""
        className='font-semibold leading-tight mt-4'
      >
        Qual a recorrência?
      </label>

      <div className='flex flex-col gap-2 mt-3'>

        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              key={weekDay}
              checked={weekDays.includes(index)}
              className='flex items-center gap-3 group focus:outline-none'
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors group-focus:outline-none group-focus:ring-2 group-focus:ring-violet-500 group-focus:ring-offset-2 group-focus:ring-offset-background'>
                <Checkbox.Indicator>
                  <Check size={20} color="white" />
                </Checkbox.Indicator>
              </div>

              <span className='text-white leading-tight'>
                {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}
      </div>

      <button
        type="submit"
        className='mt-6 rounded-lg p-4 flex items-center justify-center font-semibold bg-green-600 gap-3 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-background'
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
