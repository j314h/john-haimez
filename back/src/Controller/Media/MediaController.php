<?php

namespace App\Controller\Media;

use App\Entity\Media;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

// **** is test for upload or update file in one controller ****
#[AsController]
class MediaController extends AbstractController
{

    public function __invoke(Media $data, Request $req): Media
    {
        // if $data exist or not (exist if updated media)
        if (!$data) {
            $uploadedFile = $req->files->get('file');
            if (!$uploadedFile) {
                throw new BadRequestHttpException('"file" is required');
            }

            $media = new Media();
            $media->setFile($uploadedFile);
            $media->setSlugMedia($req->request->get('slugMedia'));

            return $media;
        } else {
            $uploadedFile = $req->files->get('file');
            if (!$uploadedFile) {
                throw new BadRequestHttpException('"file" is required');
            }
            $data->setFile($uploadedFile);
            $data->setUpdatedAt(new \DateTime());
            return $data;
        }
    }
}
