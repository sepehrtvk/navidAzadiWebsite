export const PROGRAM_URL = '/program'

export interface ProgramDTO {
  //   type: 'online1' | 'online2' | 'visit'
  _id: string
  type: string
  startDate: Date
  endDate: Date
  status?: string
  //   timeslot: '12month' | '6month'
  timeslot: string
  totalPlan?: 0 | 4 | 8
  receivedPlan?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  userId: string
  price: number
}
