import { VarComponent } from './varComponent'

export interface DatePickerProps {
  value: string | Array<string>
  type?: 'date' | 'month'
  allowedDates?: (val: string) => boolean
  color?: string
  headerColor?: string
  shadow?: boolean
  firstDayOfWeek?: string | number
  min?: string
  max?: string
  showCurrent?: boolean
  readonly?: boolean
  multiple?: boolean
  range?: boolean
}

export class DatePicker extends VarComponent {
  $props: DatePickerProps
}

export class _DatePickerComponent extends DatePicker {}
