<?php

namespace App\Controller\Media;

use App\Entity\Media;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

#[AsController]
class MediaProjectController extends AbstractController
{
    public function __invoke(Project $data, Request $req)
    {
        if ($data->getMedia()) {
            // updated media
            $uploadedFile = $req->files->get('file');
            if (!$uploadedFile) {
                throw new BadRequestHttpException('"file" is required');
            }

            $media = $data->getMedia();
            $media->setFile($uploadedFile);
            $media->setUpdatedAt(new \DateTime());

            $data->setMedia($media);

            return $data;
        } else {
            // created media
            $uploadedFile = $req->files->get('file');
            if (!$uploadedFile) {
                throw new BadRequestHttpException('"file" is required');
            }

            $media = new Media();
            $media->setFile($uploadedFile);
            $media->setName($req->request->get('name'));
            $media->setSlugMedia($req->request->get('slugMedia'));

            $data->setMedia($media);
            return $data;
        }
    }
}
