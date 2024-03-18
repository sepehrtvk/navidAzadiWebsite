import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)
dayjs().calendar('jalali')

export const epochToJalali = (
  date: number | string,
  formatType: string = 'HH:mm - YYYY/MM/DD',
): string => {
  // console.log(date.toLocaleString('fa-IR'))
  return dayjs(date).locale('fa').format(formatType)
  // return new Date(date).toLocaleString('fa-IR').slice(' ')[1]
}
