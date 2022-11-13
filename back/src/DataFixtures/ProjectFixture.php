<?php

namespace App\DataFixtures;

use App\DataFixtures\MediaFixtures;
use App\DataFixtures\GenerateString;
use App\Entity\Project;
use Doctrine\Persistence\ObjectManager;

class ProjectFixture
{
    public function __construct(
        private GenerateString $generator,
        private MediaFixtures $mediaFixture
    ) {
    }

    /**
     * create a one project
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateProject(
        ObjectManager $manager,
        bool $lessMedia = false
    ) {
        // create profile
        $project = new Project();
        $project->setTitle($this->generator->generateWord())
            ->setPresentation($this->generator->generateParagraph(8))
            ->setTechno($this->generator->generateParagraph(3))
            ->setLink('https://google.fr')
            ->setDescription($this->generator->generateParagraph(15));

        // create media's profile
        if ($lessMedia === false) {
            for ($i = 0; $i < 1; $i++) {
                $media = $this->mediaFixture->generateMedia('project', $manager);
                // save media
                $manager->persist($media);
                // add media in profile
                $project->setMedia($media);
            }
        }

        // save profile
        $manager->persist($project);
        $manager->flush();
    }

    /**
     * generate a many project
     *
     * @param integer $numberOfProject
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManyProject(
        int $numberOfProject,
        ObjectManager $manager,
        bool $lessMedia = false,
    ) {
        for ($i = 0; $i < $numberOfProject; $i++) {
            $this->generateProject($manager, $lessMedia);
        }
    }
}
