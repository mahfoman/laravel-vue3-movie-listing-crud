import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useMovies() {
    const movies = ref([])
    const router = useRouter()

    const getMovies = async (page = 1 , genre = '') => {
        axios.get('/api/movies?page=' + page + '&genre=' + genre)
            .then(response => {
                movies.value = response.data;
            })
    }

    const storeMovie = async (movie) => {
        // console.log(movie);
        axios.post('/api/movies', movie)
            .then(response => {
                router.push({ name: 'movies.index' })
            })
    }

    return { movies, getMovies, storeMovie }
}
