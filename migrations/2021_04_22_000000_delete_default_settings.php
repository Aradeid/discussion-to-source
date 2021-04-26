<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        // Do nothing
    },
    'down' => function (Builder $schema) {
        $settings = app('flarum.settings');

        $settings->delete('aradeid-d2s.external_source');
        $settings->delete('aradeid-d2s.complex_source');
    },
];