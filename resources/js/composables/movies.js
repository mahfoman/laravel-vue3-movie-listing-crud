import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useMovies() {
    const movie = ref({})
    const movies = ref([])
    const validationErrors = ref({})
    const router = useRouter()
    const isLoading = ref(false)

    const getMovies = async (page = 1 , genre = '') => {
        axios.get('/api/movies?page=' + page + '&genre=' + genre)
            .then(response => {
                movies.value = response.data;
            })
    }

    const storeMovie = async (movie) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {}

        // console.log(movie);
        axios.post('/api/movies', movie)
            .then(response => {
                router.push({ name: 'movies.index' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                    isLoading.value = false
                }
            })
    }

    const getMovie = async (id) => {
        axios.get('/api/movies/' + id)
            .then(response => {
                movie.value = response.data.data;
            })
    }

    const updateMovie = async (movie) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/movies/' + movie.id, movie)
            .then(response => {
                router.push({ name: 'movies.index' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    return { movies, getMovies, storeMovie, validationErrors, isLoading, movie, getMovie , updateMovie  }
}
