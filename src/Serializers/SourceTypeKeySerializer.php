<?php

namespace Aradeid\DiscussionToSource\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;
use Illuminate\Support\Arr;

class SourceTypeKeySerializer extends AbstractSerializer
{
    public function getType($model)
    {
        return 'aradeid-discussion2source-source-type-key';
    }

    public function getId($model)
    {
        return Arr::get($model, 'key');
    }

    protected function getDefaultAttributes($model)
    {
        return $model;
    }
}
