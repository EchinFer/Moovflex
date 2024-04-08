import { DatePickerField } from "@/components/ui/inputs/date/DatePicker";
import { Dayjs } from "dayjs";


interface SearchYearFieldProps {
    value: Dayjs | null | undefined;
    onChange: (date: Dayjs | null) => void;
}
export const SearchYearField = ({ value, onChange }: SearchYearFieldProps) => {
    return (
        <DatePickerField
            slotProps={{
                textField: {
                    size: "small",
                    sx: {
                        width: 135
                    },
                },
                field: {
                    clearable: true,
                    onClear: () => onChange(null),
                }
            }}
            views={['year']}
            value={value}
            onChange={onChange}
        />
    )
}
