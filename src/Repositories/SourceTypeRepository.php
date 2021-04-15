<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Aradeid\DiscussionToSource\Repositories;

use Aradeid\DiscussionToSource;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class SourceTypeRepository
{
    /**
     * Get a new query builder for the tags table.
     *
     * @return Builder
     */
    public function query()
    {
        return SourceType::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return SourceType
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id, User $actor = null)
    {
        $query = SourceType::where('id', $id);

        return $this->scopeVisibleTo($query, $actor)->firstOrFail();
    }

    /**
     * @param User|null $user
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all(User $user = null)
    {
        $query = Tag::query();

        return $this->scopeVisibleTo($query, $user)->get();
    }

    /**
     * @param string $slug
     * @param User|null $user
     * @return int
     */
    public function getIdForName($name, User $user = null): ?int
    {
        $query = SourceType::where('name', $name);

        return $this->scopeVisibleTo($query, $user)->value('id');
    }

    /**
     * Scope a query to only include records that are visible to a user.
     *
     * @param Builder $query
     * @param User $user
     * @return Builder
     */
    protected function scopeVisibleTo(Builder $query, User $user = null)
    {
        if ($user !== null) {
            $query->whereVisibleTo($user);
        }

        return $query;
    }
}
