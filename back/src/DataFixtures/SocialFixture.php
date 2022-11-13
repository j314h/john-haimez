<?php

namespace App\DataFixtures;

use App\DataFixtures\GenerateString;
use App\Entity\Social;
use Doctrine\Persistence\ObjectManager;

class SocialFixture
{
    public function __construct(
        private GenerateString $generator
    ) {
    }

    /**
     * create a one social
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateSocial(
        ObjectManager $manager
    ) {
        // create profile
        $profile = new Social();
        $profile->setName($this->generator->generateWord())
            ->setLink('mylink.com')
            ->setIcon('Github');

        // save profile
        $manager->persist($profile);
        $manager->flush();
    }

    /**
     * generate a many social
     *
     * @param integer $numberOfSocial
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManySocial(
        int $numberOfSocial,
        ObjectManager $manager,
    ) {
        for ($i = 0; $i < $numberOfSocial; $i++) {
            $this->generateSocial($manager);
        }
    }
}
