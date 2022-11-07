<?php

namespace App\Controller\Media;

use App\Entity\Media;
use App\Repository\CompetenceRepository;
use App\Repository\MediaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class MediaCompetenceUpdateController extends AbstractController
{
    public function __construct(private CompetenceRepository $competenceRepo, private MediaRepository $mediaRepo)
    {
    }

    public function __invoke(Request $req)
    {
        // recover file
        $uploadedFile = $req->files->get('file');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('"file" is required');
        }

        // recvover competence
        $competence = $this->competenceRepo->findOneById($req->get('idCompetence'));

        // get media's competence in tabular form
        $medias = $competence->getMedia()->toArray();

        for ($i = 0; $i < count($medias); $i++) {
            // selected media's competence
            if ($medias[$i]->getId() === intval($req->get('idMedia'))) {
                // update media
                $media = $competence->getMedia()[$i];
                $media->setFile($uploadedFile);
                $media->setUpdatedAt(new \DateTime());
            }
        }

        return $competence;
    }
}
