<template>
    <h3 class="mt-2">Create Movie </h3>
    <div class="card mt-3">
        <div class="card-body">
            <form @submit.prevent="storeMovie(movie)">
                <div class="mb-3">
                    <label for="email">Title:</label>
                    <input type="text" v-model="movie.title" class="form-control" id="title" placeholder="Enter title" name="title">
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
                    <select v-model="movie.genre_id" id="genre_id" name="genre_id" class="form-control">
                        <option value="" selected>-- Choose genre --</option>
                        <option v-for="genre in genres" :value="genre.id">
                            {{ genre.name }}
                        </option>
                    </select>
                    <div v-for="message in validationErrors?.genre_id">
                        <span class="text-danger">{{ message }}</span>
                    </div>
                </div>
                <button :disabled="isLoading" type="submit" class="btn btn-primary cursor-not-allowed">
                    <span v-show="isLoading" class="spinner-border p-2">&nbsp;</span>
                    <span v-if="isLoading">&nbsp;&nbsp;Saving...</span>
                    <span v-else>Save</span>
                </button>
            </form>
        </div>
    </div>
</template>

<style>
.spinner-border {
    width: 14px;
    height: 14px;
}
</style>

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
const { storeMovie, validationErrors, isLoading  } = useMovies()

onMounted(() => {
    getGenres()
})
</script>
