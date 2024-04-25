<template>
    <h1>Edit Client Issue </h1>
    <div class="card mt-3">
        <div class="card-body">
            <form @submit.prevent="updateMovie(movie)">
                <div class="mb-3">
                    <label for="email">Title:</label>
                    <input v-model="movie.title" type="text" class="form-control" id="text" placeholder="Enter title" name="title">
                    <div v-for="message in validationErrors?.title">
                        <span class="text-danger">{{ message }}</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Description:</label>
                    <textarea v-model="movie.description"  class="form-control" rows="5" id="description" name="description"></textarea>
                    <div v-for="message in validationErrors?.description">
                        <span class="text-danger">{{ message }}</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="pwd">Genre:</label>
                    <select v-model="movie.genre_id" id="genre_id" class="form-control" name="genre_id">
                        <option value="" selected>-- Choose genre --</option>
                        <option v-for="genre in genres" :value="genre.id">
                            {{ genre.name }}
                        </option>
                    </select>
                    <div v-for="message in validationErrors?.genre_id">
                        <span class="text-danger">{{ message }}</span>
                    </div>
                </div>
                <!-- <button type="submit" class="btn btn-primary cursor-not-allowed">
                    <span>Save</span>
                </button> -->
                <button :disabled="isLoading" type="submit" class="btn btn-primary cursor-not-allowed">
                    <span v-show="isLoading" class="spinner-border p-2">&nbsp;</span>
                    <span v-if="isLoading">&nbsp;&nbsp;Processing...</span>
                    <span v-else>Save</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute } from "vue-router";
import useGenres from "../../composables/genres";
import useMovies from '../../composables/movies';

const route = useRoute()


const { genres, getGenres } = useGenres()
const { storeMovie, validationErrors, isLoading, movie, getMovie, updateMovie } = useMovies()

onMounted(() => {
    getGenres()
    getMovie(route.params.id)
})

</script>
