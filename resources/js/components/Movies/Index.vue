<template>
    <h1>Mahfoman Movies</h1>
    <table>
        <tr>
            <th class="px-6 py-3 bg-gray-50 text-left">
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left">
                <select v-model="search_genre" :options="genres" placeholder="Filter By Genre" :settings="{ 'width' : '100%' }">
                    <option value="" selected>-- Filter by genre --</option>
                    <option v-for="genre in genres" :value="genre.id" :key="genre.id">
                        {{ genre.name }}
                    </option>
                </select>
            </th>
            <th>
                <th class="px-6 py-2 bg-gray-50 text-left">
                </th>
            </th>
            <th>
                <th class="px-6 py-2 bg-gray-50 text-left">
                </th>
            </th>
            <th></th>
            <th></th>
        </tr>
    </table>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Genre</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="movie in movies.data">
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{ movie.id }}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{ movie.genre }}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{ movie.title }}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{ movie.description }}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {{ movie.created_at }}
            </td>
            <td>
                <router-link :to="{ name: 'movies.edit', params: { id: movie.id } }" >
                    <i class="fa fa-pencil-square-o text-dark" aria-hidden="true"></i>
                </router-link>
                <a href="#" @click.prevent="deleteMovie(movie.id)" class="ml-2">
                    <i class="fa fa-trash text-dark" aria-hidden="true"></i>
                </a>
            </td>
        </tr>
        </tbody>
    </table>

    <div class="d-flex justify-content-center mt-3">
        <Bootstrap4Pagination :data="movies" @pagination-change-page="page => getMovies(page, search_genre)" />
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import useMovies from "../../composables/movies";
import { Bootstrap4Pagination } from 'laravel-vue-pagination';
import useGenres from "../../composables/genres";

const search_genre = ref('')

const { movies, getMovies, deleteMovie } = useMovies()
const { genres, getGenres } = useGenres()

watch(search_genre, (current, previous) => {
    getMovies(1, current)
})

onMounted(() => {
    getMovies()
    getGenres()
})
</script>
