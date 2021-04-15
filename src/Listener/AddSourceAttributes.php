<?php

namespace Aradeid\DiscussionToSource\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\DiscussionSerializer;

class AddSourceAttributes
{
    public function handle(Serializing $event)
    {
        if ($event->isSerializer(DiscussionSerializer::class)) {
            $event->attributes += [
                'link' => $event->model->link,
                'thumbnail' => $event->model->thumbnail,
                'source_type' => $event->model->source_type,
            ];
        }
    }
}