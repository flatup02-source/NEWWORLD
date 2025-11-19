export type QuizItem = {
  id: number
  type: 'entrance_theme' | 'audio' | string
  question?: string
  correct_answer: string
  options: string[]
  category?: string
  trivia?: string
  audio_file?: string
}
