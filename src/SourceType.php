<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Aradeid\DiscussionToSource;

use Flarum\Database\AbstractModel;
use Flarum\Database\ScopeVisibilityTrait;
use Flarum\Discussion\Discussion;
use Flarum\Group\Permission;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * @property int $id
 * @property string $name
 */
class SourceType extends AbstractModel
{
    use ScopeVisibilityTrait;

    protected $table = 'aradeid_discussion2source_source_type';

    public static function boot()
    {
        parent::boot();

        static::saved(function (self $type) {
            if ($type->wasUnrestricted()) {
                $type->deletePermissions();
            }
        });

        static::deleted(function (self $type) {
            $type->deletePermissions();
        });
    }

    /**
     * Create a new tag.
     *
     * @param string $name
     * @return static
     */
    public static function build($name)
    {
        $type = new static;

        $type->name = $name;

        return $tag;
    }

    public function discussions()
    {
        return $this->belongsToMany(Discussion::class);
    }

    /**
     * Delete all permissions belonging to this tag.
     */
    public function deletePermissions()
    {
        Permission::where('permission', 'like', "source_type{$this->id}.%")->delete();//???
    }

    protected static function getIdsWherePermission(User $user, string $permission, bool $condition = true, bool $includePrimary, bool $includeSecondary): array
    {
        static $types;

        $ids = [];
        $hasGlobalPermission = $user->hasPermission($permission);

        $canForType = function (self $type) use ($user, $permission, $hasGlobalPermission) {
            return $hasGlobalPermission || $user->hasPermission('type'.$type->id.'.'.$permission);
        };

        foreach ($types as $type) {
            $can = $canForType($type);

            if ($can === $condition) {
                $ids[] = $tag->id;
            }
        }

        return $ids;
    }

    public static function getIdsWhereCan(User $user, string $permission, bool $includePrimary = true, bool $includeSecondary = true): array
    {
        return static::getIdsWherePermission($user, $permission, true, $includePrimary, $includeSecondary);
    }

    public static function getIdsWhereCannot(User $user, string $permission, bool $includePrimary = true, bool $includeSecondary = true): array
    {
        return static::getIdsWherePermission($user, $permission, false, $includePrimary, $includeSecondary);
    }
}
