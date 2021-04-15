<?php

namespace Aradeid\DiscussionToSource\Validators;

use Flarum\Foundation\AbstractValidator;

class SourceTypeValidator extends AbstractValidator
{
    protected function getRules()
    {
        return [
            'type' => 'required|string',
        ];
    }
}
