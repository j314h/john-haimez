<?php

namespace App\DataFixtures;

use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function __construct(
        private UserFixtures $userFixture,
        private CompetenceFixtures $competenceFixture,
        private ProfileFixture $profileFixture,
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        // create a many user
        $this->userFixture->generateManyUsers(10, $manager);
        // create user root
        $this->userFixture->generateUserRoot($manager);
        // create other custom user
        $this->userFixture->generateManualUser(
            'useradmin',
            'mynameadmin',
            'useradmin@gmail.com',
            ['ROLE_ADMIN'],
            $manager
        );
        $this->userFixture->generateManualUser(
            'userauth',
            'mynameauth',
            'userauth@gmail.com',
            ['ROLE_AUTH'],
            $manager
        );

        /**
         * create competence with media and lesss media
         */
        $this->competenceFixture->generateManyCompetence(10, $manager);
        $this->competenceFixture->generateManyCompetence(10, $manager, true);

        /**
         * create profile with media and lesss media
         */
        $this->profileFixture->generateManyProfile(10, $manager);
        $this->profileFixture->generateManyProfile(10, $manager, false);


        $manager->flush();
    }
}
