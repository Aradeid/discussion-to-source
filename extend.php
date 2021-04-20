<?php

/*
 * This file is part of aradeid/discussion-to-source.
 *
 * Copyright (c) 2021 Aradeid.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Aradeid\DiscussionToSource;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Tags\Api\Controller;
use Flarum\Api\Serializer\ForumSerializer;
use Aradeid\DiscussionToSource\Listener\AddSourceAttributes;
use Aradeid\DiscussionToSource\Listener\SaveSourceAttributes;
use Aradeid\DiscussionToSource\Controllers;

return [
    // (new Extend\ApiSerializer(ForumSerializer::class))
    //     ->attributes(Extenders\AddForumAttributes::class),
    (new Extend\Settings())
        ->serializeToForum('externalSource.images', 'aradeid-source.external.images', 'boolval', false),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),

    (new Extend\Routes('api'))
        ->get('/sourceTypes', 'sourceTypes.index', Controllers\SourceTypeIndexController::class)
        ->post('/sourceTypes', 'sourceTypes.create', Controllers\SourceTypeStoreController::class)
        ->patch('/sourceTypes/{id}', 'sourceTypes.update', Controller\SourceTypeUpdateController::class)
        ->delete('/sourceTypes/{id}', 'sourceTypes.delete', Controller\SourceTypeDeleteController::class),

    (new Extend\Model(Discussion::class))
        ->hasOne('aradeid_discussion2source_source_type', SourceType::class, 'type'),//???
    
    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Event())->listen(Serializing::class, AddSourceAttributes::class),
    (new Extend\Event())->listen(Saving::class, SaveSourceAttributes::class),
];
