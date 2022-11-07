<?php

namespace App\DataFixtures;

use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function __construct(
        private UserFixtures $userFixture,
        private CompetenceFixtures $competenceFixture
    ) {
    }

    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

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

        // create a 3 competences  
        $this->competenceFixture->generateManyCompetence(3, $manager);

        $manager->flush();
    }
}
