<?php

namespace App\Controller\Media;

use App\Entity\Media;
use App\Entity\Profile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MediaProfileController extends AbstractController
{
    public function __invoke(Profile $profile, Request $req)
    {
        if ($profile->getMedia()) {
            // updated media
            return $profile;
        } else {
            // created media
            $uploaded_file = $req->files->get('file');
            if (!$uploaded_file) {
                throw new BadRequestHttpException('"file" is required');
            }

            $media = new Media();
            $media->setFile($uploaded_file);
            $media->setName($req->request->get('name'));
            $media->setSlugMedia($req->request->get('slugMedia'));

            $profile->setMedia($media);
            return $profile;
        }
    }
}
