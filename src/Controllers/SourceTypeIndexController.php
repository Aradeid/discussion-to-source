<?php

namespace Aradeid\DiscussionToSource\Controllers;

use Aradeid\DiscussionToSource\Serializers\SourceTypeSerializer;
use Aradeid\DiscussionToSource\SourceType;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class SourceTypeIndexController extends AbstractListController
{
    public $serializer = SourceTypeSerializer::class;

    protected $types;

    public function __construct(SourceType $type)
    {
        $this->types = $type;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        //$request->getAttribute('actor')->assertAdmin();

        return $this->types->all();
    }
}
