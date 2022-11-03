<?php

namespace App\Controller\Media;

use App\Entity\Profile;
use App\Repository\MediaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MediaDeleteProfileController extends AbstractController
{
    public function __construct(private MediaRepository $mediaRepo)
    {
    }

    public function __invoke(Profile $data)
    {
        // media set with null
        $media = $data->getMedia();
        $data->setMedia(null);

        // delete media
        $this->mediaRepo->remove($media, true);

        return $data;
    }
}
