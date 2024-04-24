<template>
    <h1>Mahfoman Movies</h1>
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Genre</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
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
        </tr>
        </tbody>
    </table>

    <div class="d-flex justify-content-center mt-3">
        <Bootstrap4Pagination :data="movies" @pagination-change-page="getMovies" />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useMovies from "../../composables/movies";
import { Bootstrap4Pagination } from 'laravel-vue-pagination';

const { movies, getMovies } = useMovies()
onMounted(() => {
    getMovies()
})
</script>
