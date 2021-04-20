<?php

/*
 * Throw this class are added the nesesary
 * permisions for extension
 */

namespace Aradeid\DiscussionToSource\Extenders;

use Flarum\Api\Serializer\ForumSerializer;

class AddForumAttributes
{
    public function __invoke(ForumSerializer $serializer)
    {
        // External Sources Options
        $attributes['aradeid-source.external'] = array(
            "images" => true,
            "categories" => false,
            "slideshow" => false,
            "source_URL" => false,
            "images_URL" => false,
            "videos_URL" => false,
            "transliterator" => false,
            "digital_packages" => false,
            "text_file_rendering" => false,
            "metadata_generator" => false,
            "collage_maker" => false,
            "polls" => false,
            "forms" => false,
            "cv" => false,
            "stickers" => false,
            "checklist" => false,
            "labels" => false,
            "narator" => false,
            "image_preview"
        );
        $attributes['aradeid-source.complex'] = array(
            "images" => true,
            "categories" => false,
            "slideshow" => false,
            "source_URL" => false,
            "images_URL" => false,
            "videos_URL" => false,
            "transliterator" => true,
            "digital_packages" => false,
            "text_file_rendering" => false,
            "metadata_generator" => false,
            "collage_maker" => false,
            "polls" => false,
            "forms" => true,
            "cv" => false,
            "stickers" => false,
            "checklist" => false,
            "labels" => false,
            "narator" => false,
            "image_preview" => false
        );
        
        return $attributes;
    }
}
