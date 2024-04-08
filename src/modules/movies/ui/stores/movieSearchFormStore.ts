import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface MovieSearchFilterState {
    filter: {
        search: string;
        year?: number;
    };
    page: number;
    setFilter: (search: string, year?: number) => void;
}

export const useMovieSearchFilterStore = create<MovieSearchFilterState>(
    (set) => ({
        filter: {
            search: "",
            year: 0,
        },
        page: 1,
        setFilter: (search, year) => {
            set((state) => {
                return {
                    ...state,
                    filter: {
                        search,
                        year,
                    },
                    page: 1,
                };
            });
        },
    })
);

export const useMovieSearchFilter = () => {
    const search = useMovieSearchFilterStore(useShallow((state) => {
        return state.filter.search;
    }));

    return search;
};

export const useMovieYearFilter = () => {
    const year = useMovieSearchFilterStore(useShallow((state) => {
        return state.filter.year;
    }));

    return year;
}

export const useMovieSetFilter = () => {
    const setSearch = useMovieSearchFilterStore((state) => state.setFilter);
    return setSearch;
};