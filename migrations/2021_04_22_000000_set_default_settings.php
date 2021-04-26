<?php

use Flarum\Database\Migration;

$external = [
    'images' => 0,
    'categories' => 0,
    'slideshow' => 0,
    'source_URL' => 0,
    'images_URL' => 0,
    'videos_URL' => 0,
    'transliterator' => 0,
    'digital_packages' => 0,
    'text_file_rendering' => 0,
    'metadata_generator' => 0,
    'collage_maker' => 0,
    'polls' => 0,
    'forms' => 0,
    'cv' => 0,
    'stickers' => 0,
    'checklist' => 0,
    'labels' => 0,
    'narator' => 0,
    'image_preview' => 0
];
$complex = [
    'images' => 0,
    'categories' => 0,
    'slideshow' => 0,
    'source_URL' => 0,
    'images_URL' => 0,
    'videos_URL' => 0,
    'transliterator' => 0,
    'digital_packages' => 0,
    'text_file_rendering' => 0,
    'metadata_generator' => 0,
    'collage_maker' => 0,
    'polls' => 0,
    'forms' => 0,
    'cv' => 0,
    'stickers' => 0,
    'checklist' => 0,
    'labels' => 0,
    'narator' => 0,
    'image_preview' => 0
];

return Migration::addSettings([
    'aradeid-d2s.external_source' => json_encode($external),
    'aradeid-d2s.complex_source' => json_encode($complex)
]);