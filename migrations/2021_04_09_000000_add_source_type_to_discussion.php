<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('discussions', 'source_type')) {
            $schema->table('discussions', function (Blueprint $table) use ($schema) {
                $table->integer('source_type');
            });
        }
        if (!$schema->hasTable('aradeid_discussion2source_source_type')) {
            $schema->create('aradeid_discussion2source_source_type', function (Blueprint $table) {
                $table->increments('id');
                $table->string('type');
                
                //$table->unique(['id']);
                $table->foreign('source_type')->references('id')->on('discussions')->onDelete('set null');;
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) use ($schema) {
            $table->dropColumn('source_type');
        });
        $schema->dropIfExists('aradeid_discussion2source_source_type');
    },
];