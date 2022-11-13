<?php

namespace App\DataFixtures;

use App\DataFixtures\MediaFixtures;
use App\DataFixtures\GenerateString;
use App\Entity\Profile;
use Doctrine\Persistence\ObjectManager;

class ProfileFixture
{
    public function __construct(
        private GenerateString $generator,
        private MediaFixtures $mediaFixture
    ) {
    }

    /**
     * create a one profile
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateProfile(ObjectManager $manager)
    {
        // create profile
        $profile = new Profile();
        $profile->setTitle($this->generator->generateWord())
            ->setDescription($this->generator->generateParagraph(15))
            ->setSubTitle($this->generator->generateParagraph(5))
            ->setTel($this->generator->generateParagraph(12))
            ->setAddress($this->generator->generateParagraph(5));

        // create media's profile
        for ($i = 0; $i < 1; $i++) {
            $media = $this->mediaFixture->generateMedia('profile', $manager);
            // save media
            $manager->persist($media);
            // add media in profile
            $profile->setMedia($media);
        }

        // save profile
        $manager->persist($profile);
        $manager->flush();
    }

    /**
     * generate a many profile
     *
     * @param integer $numberOfProfile
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManyProfile(
        int $numberOfProfile,
        ObjectManager $manager
    ) {
        for ($i = 0; $i < $numberOfProfile; $i++) {
            $this->generateProfile($manager);
        }
    }
}
