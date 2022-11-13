<?php

namespace App\DataFixtures;

use App\Entity\Competence;
use Doctrine\Persistence\ObjectManager;

class CompetenceFixtures
{
    public function __construct(
        private GenerateString $generator,
        private MediaFixtures $mediaFixture
    ) {
    }

    /**
     * create a one competence
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateCompetence(
        ObjectManager $manager,
        bool $lessMedia = false
    ) {
        // create competence
        $competence = new Competence();

        // create title
        $competence->setTitle($this->generator->generateWord())
            // create description
            ->setDescription($this->generator->generateParagraph(15));

        // create media's competence
        if ($lessMedia === false) {
            for ($i = 0; $i < 1; $i++) {
                $media = $this->mediaFixture->generateMedia('competence', $manager);
                // save media
                $manager->persist($media);
                // add media in competence
                $competence->addMedium($media);
            }
        }

        // save competence
        $manager->persist($competence);
        $manager->flush();
    }

    /**
     * generate a many competence
     *
     * @param integer $numberOfCompetence
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManyCompetence(
        int $numberOfCompetence,
        ObjectManager $manager,
        bool $lessMedia = false,
    ) {
        for ($i = 0; $i < $numberOfCompetence; $i++) {
            $this->generateCompetence($manager, $lessMedia);
        }
    }
}
