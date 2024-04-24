import { ref } from 'vue'

export default function useMovies() {
    const movies = ref([])

    const getMovies = async (page = 1) => {
        axios.get('/api/movies?page=' + page)
            .then(response => {
                movies.value = response.data;
            })
    }
    return { movies, getMovies }
}
