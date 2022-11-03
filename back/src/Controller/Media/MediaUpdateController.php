<?php

namespace App\Controller\Media;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MediaUpdateController extends AbstractController
{
    // update media with id
    public function __invoke(Request $req)
    {
        $data = $req->attributes->get('data');
        $uploadedFile = $req->files->get('file');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('"file" is required');
        }
        $data->setFile($uploadedFile);
        $data->setUpdatedAt(new \DateTime());
        return $data;
    }
}
