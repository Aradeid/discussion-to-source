<?php

namespace Aradeid\DiscussionToSource\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;

class SourceTypeSerializer extends AbstractSerializer
{
    public function getType($model)
    {
        return 'aradeid-discussion2source-source-type';
    }

    protected function getDefaultAttributes($model)
    {
        return $model->toArray();
    }
}
