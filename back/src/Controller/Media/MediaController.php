<?php

namespace App\Controller\Media;

use App\Entity\Media;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

#[AsController]
class MediaController extends AbstractController
{

    public function __invoke(Media $data, Request $req): Media
    {
        // if $data exist or not (exist if updated media)
        if (!$data) {
            $uploaded_file = $req->files->get('file');
            if (!$uploaded_file) {
                throw new BadRequestHttpException('"file" is required');
            }

            $media = new Media();
            $media->setFile($uploaded_file);
            $media->setSlugMedia($req->request->get('slugMedia'));

            return $media;
        } else {
            $uploaded_file = $req->files->get('file');
            if (!$uploaded_file) {
                throw new BadRequestHttpException('"file" is required');
            }
            $data->setFile($uploaded_file);
            $data->setUpdatedAt(new \DateTime());
            return $data;
        }
    }
}
