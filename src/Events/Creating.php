<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Aradeid\DiscussionToSource\Events;

use Aradeid\DiscussionToSource\SourceType;
use Flarum\User\User;

class Creating
{
    /**
     * @var SourceType
     */
    public $type;

    /**
     * @var User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    /**
     * @param SourceType $type
     * @param User $actor
     * @param array $data
     */
    public function __construct(SourceType $type, User $actor, array $data)
    {
        $this->type = $type;
        $this->actor = $actor;
        $this->data = $data;
    }
}
