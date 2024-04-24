import { ref } from 'vue'

export default function useMovies() {
    const movies = ref([])

    const getMovies = async () => {
        axios.get('/api/movies')
            .then(response => {
                movies.value = response.data;
            })
    }
    return { movies, getMovies }
}
