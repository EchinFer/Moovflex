import { Stack } from '@mui/material';
import { MovieModel } from '../../core/models/MovieModel';
import { MetadataField } from './MetadataField';

interface MetadataCardContainerProps {
    movie: MovieModel;
}
export const MetadataCardContainer = ({ movie }: MetadataCardContainerProps) => {
    return (
        <Stack spacing={1}>
            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"Actores"}
                    value={movie.Actors}
                />
            </Stack>

            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"Director"}
                    value={movie.Director}
                />
            </Stack>

            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"Idioma"}
                    value={movie.Language}
                />
            </Stack>

            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"País"}
                    value={movie.Country}
                />
            </Stack>

            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"Premios"}
                    value={movie.Awards}
                />
            </Stack>

            <Stack direction={"row"} spacing={1}>
                <MetadataField
                    label={"Metascore"}
                    value={movie.Metascore}
                />
            </Stack>
        </Stack>
    )
}