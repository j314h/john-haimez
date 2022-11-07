<?php

namespace App\Controller\Media;

use App\Entity\Competence;
use App\Entity\Media;
use App\Repository\MediaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MediaCompetenceController extends AbstractController
{
    public function __construct(private MediaRepository $mediaRepo)
    {
    }

    public function __invoke(Competence $data, Request $req)
    {
        // ******* created media for competence ******* //

        $uploadedFile = $req->files->get('file');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('"file" is required');
        }

        $media = new Media();
        $media->setFile($uploadedFile);
        $media->setName($req->request->get('name'));
        $media->setSlugMedia($req->request->get('slugMedia'));
        $media->setCompetence($data);
        $this->mediaRepo->save($media, true);

        return $data;
    }
}
