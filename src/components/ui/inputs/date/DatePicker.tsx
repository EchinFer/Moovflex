import { DatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

type DatePickerFieldComponent = DatePickerProps<Dayjs, false> & React.RefAttributes<HTMLDivElement>
export const DatePickerField = (props: DatePickerFieldComponent) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...props}
            />
        </LocalizationProvider>
    )
}
