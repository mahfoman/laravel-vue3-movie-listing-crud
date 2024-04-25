<template>
    <h3 class="mt-2">Create Movie </h3>
    <div class="card mt-3">
        <div class="card-body">
            <form @submit.prevent="storeMovie(movie)">
                <div class="mb-3">
                    <label for="email">Title:</label>
                    <input type="text" v-model="movie.title" class="form-control" id="title" placeholder="Enter title" name="title">
                </div>
                <div class="mb-3">
                    <label for="email">Description:</label>
                    <textarea v-model="movie.description"  class="form-control" rows="5" id="description" name="description"></textarea>
                </div>
                <div class="mb-3">
                    <label for="pwd">Genre:</label>
                    <select v-model="movie.genre_id" id="genre_id" name="genre_id" class="form-control">
                        <option value="" selected>-- Choose genre --</option>
                        <option v-for="genre in genres" :value="genre.id">
                            {{ genre.name }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary cursor-not-allowed">
                    <span>Save</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import useGenres from "../../composables/genres";
import useMovies from "../../composables/movies";

const movie = reactive({
    title: '',
    description: '',
    genre_id: ''
})

const { genres, getGenres } = useGenres()
const { storeMovie } = useMovies()

onMounted(() => {
    getGenres()
})
</script>
