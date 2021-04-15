<?php

namespace Aradeid\DiscussionToSource\Controllers;

use Aradeid\DiscussionToSource\Serializers\SourceTypeSerializer;
use Aradeid\DiscussionToSource\Commands\SourceTypeCreate;
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class SourceTypeStoreController extends AbstractCreateController
{
    public $serializer = SourceTypeSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $request->getAttribute('actor')->assertAdmin();

        return $this->bus->dispatch(
            new SourceTypeCreate($request->getAttribute('actor'), Arr::get($request->getParsedBody(), 'data', []))
        );
    }
}
