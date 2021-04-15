<?php

namespace Aradeid\DiscussionToSource\Controllers;

use Flarum\Api\Controller\AbstractDeleteController;
use Aradeid\DiscussionToSource\Commands\SourceTypeDelete;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;

class SourceTypeDeleteController extends AbstractDeleteController
{
    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->source_type = $source_type;
    }

    protected function delete(ServerRequestInterface $request)
    {
        $request->getAttribute('actor')->assertAdmin();

        $this->bus->dispatch(
            new SourceTypeDelete(Arr::get($request->getQueryParams(), 'id'), $request->getAttribute('actor'))
        );
    }
}
