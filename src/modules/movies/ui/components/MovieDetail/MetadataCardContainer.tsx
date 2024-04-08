import Grid from '@mui/material/Unstable_Grid2';
import { MovieModel } from '../../../core/models/MovieModel';
import { MetadataCardRow } from './MetadataCardRow';
import { MetadataField } from './MetadataField';

interface MetadataCardContainerProps {
    movie: MovieModel;
}
export const MetadataCardContainer = ({ movie }: MetadataCardContainerProps) => {
    return (
        <Grid container rowGap={"12px"}>
            <MetadataCardRow>
                <MetadataField
                    label={"Año"}
                    value={movie.Year}
                />
                <MetadataField
                    label={"Lanzamiento"}
                    value={movie.Released}
                />
            </MetadataCardRow>

            <MetadataCardRow>
                <MetadataField
                    label={"Idioma"}
                    value={movie.Language}
                />
                <MetadataField
                    label={"País"}
                    value={movie.Country}
                />
            </MetadataCardRow>

            <MetadataCardRow>
                <MetadataField
                    label={"Actores"}
                    value={movie.Actors}
                />
                <MetadataField
                    label={"Director"}
                    value={movie.Director}
                />
            </MetadataCardRow>


            <MetadataCardRow>
                <MetadataField
                    label={"Premios"}
                    value={movie.Awards}
                />
                <MetadataField
                    label={"Recaudación"}
                    value={movie.BoxOffice}
                />
            </MetadataCardRow>

        </Grid>

    )
}