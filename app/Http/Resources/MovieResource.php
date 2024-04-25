<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'genre' => $this->genre->name,
            'genre_id' => $this->genre_id,
            'title' => $this->title,
            'description' => substr($this->description, 0, 80) . '...',
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
