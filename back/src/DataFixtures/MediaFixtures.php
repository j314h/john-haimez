<?php

namespace App\DataFixtures;

use App\Entity\Media;

class MediaFixtures
{
    public const MEDIA_REF = 'media';

    public function generateMedia(string $slug)
    {
        $media = new Media();
        $media->setName($slug)->setSlugMedia($slug);
        $media->setPath('https://picsum.photos/id/' . rand(1, 100) . '/300/300');

        return $media;
    }
}
