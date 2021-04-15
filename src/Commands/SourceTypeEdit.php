<?php

namespace Aradeid\DiscussionToSource\Commands;

use Flarum\User\User;

class SourceTypeEdit
{
    /**
     * The ID of the type to edit.
     *
     * @var int
     */
    public $typeId;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes to update on the type.
     *
     * @var array
     */
    public $data;

    /**
     * @param int $tagId The ID of the tag to edit.
     * @param User $actor The user performing the action.
     * @param array $data The attributes to update on the tag.
     */
    public function __construct($typeId, User $actor, array $data)
    {
        $this->typeId = $typeId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
