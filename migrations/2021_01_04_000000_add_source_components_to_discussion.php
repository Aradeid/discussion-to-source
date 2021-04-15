<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('discussions', 'thumbnail')) {
            $schema->table('discussions', function (Blueprint $table) use ($schema) {
                $table->string('thumbnail', 200)->index();
            });
        }
        if (!$schema->hasColumn('discussions', 'link')) {
            $schema->table('discussions', function (Blueprint $table) use ($schema) {
                $table->string('link', 200)->index();
            });
        }
    },
    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) use ($schema) {
            $table->dropColumn('thumbnail');
            $table->dropColumn('link');
        });
    }
];