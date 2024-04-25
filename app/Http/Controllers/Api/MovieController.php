<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Resources\MovieResource;
use App\Models\Movie;
use Illuminate\Database\Eloquent\Builder;

class MovieController extends Controller
{
    public function index() {
        $movies = Movie::with('genre')
            ->when(request('genre'), function (Builder $query) {
                $query->where('genre_id', request('genre'));
            })
            ->paginate(10);
        return MovieResource::collection($movies);
    }

    public function store(StoreMovieRequest $request) {
        //dd($request);
        $movie = Movie::create($request->validated());
        return new MovieResource($movie);
    }
}
