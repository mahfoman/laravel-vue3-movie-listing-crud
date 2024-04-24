import { ref } from 'vue'

export default function useGenres() {
    const genres = ref({})

    const getGenres = async () => {
        axios.get('/api/genres')
            .then(response => {
                genres.value = response.data.data;
            })
    }

    return { genres, getGenres }
}
