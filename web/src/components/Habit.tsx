interface HabitProps {
  completed: number;
}


export function Habit({ completed }: HabitProps) {
  return (
    <div className='bg-zinc-600 w-10 h-10 rounded m-2 flex items-center justify-center'></div>
  )
}
