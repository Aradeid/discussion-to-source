<?php

namespace Aradeid\DiscussionToSource\Controllers;

use Aradeid\DiscussionToSource\Serializers\SourceTypeSerializer;
use Aradeid\DiscussionToSource\Commands\SourceTypeEdit;
use Illuminate\Contracts\Bus\Dispatcher;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class SourceTypeUpdateController extends AbstractShowController
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

        $id = Arr::get($request->getQueryParams(), 'id');

        $data = Arr::get($request->getParsedBody(), 'data', []);

        return $this->bus->dispatch(
            new SourceTypeEdit($id, $actor, $data)
        );
    }
}
