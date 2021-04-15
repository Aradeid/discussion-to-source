<?php

namespace Aradeid\DiscussionToSource\Listener;

use Flarum\Discussion\Event\Saving;
use Illuminate\Support\Arr;

class SaveSourceAttributes
{
    public function handle(Saving $event)
    {
        $discussion = $event->discussion;
        $data = $event->data;
        $actor = $event->actor;
        $attributes = Arr::get($data, 'attributes', []);

        $actor->assertCan('rename', $discussion);
        if (isset($attributes['link'])) {
            $discussion->link = $attributes['link'];
            $discussion->save();
        }
        if (isset($attributes['thumbnail'])) {
            $discussion->thumbnail = $attributes['thumbnail'];
            $discussion->save();
        }
        if (isset($attributes['source_type'])) {
            $discussion->thumbnail = $attributes['source_type'];
            $discussion->save();
        }
    }
}