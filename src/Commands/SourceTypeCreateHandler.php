<?php

namespace Aradeid\DiscussionToSource\Commands;

use Aradeid\DiscussionToSource;
use Aradeid\DiscussionToSource\Event\Creating;
use Aradeid\DiscussionToSource\Validators\SourceTypeValidator;
use Illuminate\Support\Arr;

class SourceTypeCreateHandler
{
    /**
     * @var SourceTypeValidator
     */
    protected $validator;

    /**
     * @param SourceTypeValidator $validator
     */
    public function __construct(SourceTypeValidator $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param SourceTypeCreate $command
     * @return SourceType
     */
    public function handle(CreateTag $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('createTag');

        $type = SourceType::build(
            Arr::get($data, 'attributes.name')
        );

        event(new Creating($type, $actor, $data));

        $this->validator->assertValid($type->getAttributes());

        $type->save();

        return $type;
    }
}
