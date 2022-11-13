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
        private SocialFixture $socialFixture,
        private ProjectFixture $projectFixture,
        private SettingFixture $settingFixture,
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
         * create many competence with media and lesss media
         */
        $this->competenceFixture->generateManyCompetence(10, $manager);
        $this->competenceFixture->generateManyCompetence(10, $manager, true);

        /**
         * create many profile with media and lesss media
         */
        $this->profileFixture->generateManyProfile(10, $manager);
        $this->profileFixture->generateManyProfile(10, $manager, true);

        /**
         * create many social
         */
        $this->socialFixture->generateManySocial(10, $manager);

        /**
         * create many project with media and lesss media
         */
        $this->projectFixture->generateManyProject(10, $manager);
        $this->projectFixture->generateManyProject(10, $manager, true);

        /**
         * create a setting
         */
        $this->settingFixture->generateSetting($manager);


        $manager->flush();
    }
}
