import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)
dayjs().calendar('jalali')

export const epochToJalali = (
  date: number | string,
  formatType: string = 'HH:mm - YYYY/MM/DD',
): string => {
  return dayjs(date).locale('fa').format(formatType)
}
