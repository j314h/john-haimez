<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\DataFixtures\GenerateString;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures
{

    private UserPasswordHasherInterface $hasher;

    public function __construct(
        UserPasswordHasherInterface $hasher,
        private GenerateString $generator,
    ) {
        $this->hasher = $hasher;
    }

    /**
     * generate one user
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateUser(ObjectManager $manager)
    {
        // create user
        $user = new User();

        // create fisrname
        $user->setFirstName($this->generator->generateWord(7))
            // create lastname
            ->setLastName($this->generator->generateWord(9))
            // create email
            ->setEmail($this->generator->generateEmail())
            // create role basic 
            ->setRoles(['ROLE_AUTH'])
            // create name with first name and lastname
            ->setName($user->getFirstName() . ' ' . $user->getLastName());

        // create password
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);

        // save
        $manager->persist($user);
        $manager->flush();
    }

    /**
     * generate many users
     *
     * @param integer $numberOfUser
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManyUsers(int $numberOfUser, ObjectManager $manager)
    {
        for ($i = 0; $i < $numberOfUser; $i++) {
            $this->generateUser($manager);
        }
    }

    /**
     * generate one user for role root
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateUserRoot(ObjectManager $manager)
    {
        // create user
        $user = new User();

        // create fisrname
        $user->setFirstName('john')
            // create lastname
            ->setLastName('haimez')
            // create email
            ->setEmail('haimezjohn@gmail.com')
            // create role basic 
            ->setRoles(['ROLE_ROOT'])
            // create name with first name and lastname
            ->setName($user->getFirstName() . ' ' . $user->getLastName());

        // create password
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);

        $manager->persist($user);
        $manager->flush();
    }

    /**
     * generate one user for custom data
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function generateManualUser(
        string $firstName,
        string $lastName,
        string $email,
        array $roles,
        ObjectManager $manager
    ) {
        // create user
        $user = new User();

        // create fisrname
        $user->setFirstName($firstName)
            // create lastname
            ->setLastName($lastName)
            // create email
            ->setEmail($email)
            // create role basic 
            ->setRoles($roles)
            // create name with first name and lastname
            ->setName($user->getFirstName() . ' ' . $user->getLastName());

        // create password
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);

        $manager->persist($user);
        $manager->flush();
    }
}
