<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures
{

    private UserPasswordHasherInterface $hasher;
    private string $str = 'azertyuiopqsdfghjklmwxcvbn';

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    /**
     * create un sample name faker
     *
     * @param integer $length
     * @return string
     */
    private function generateName(int $length = 5)
    {
        $name = '';

        for ($i = 0; $i < $length; $i++) {
            $arrString = str_split($this->str);
            $name .= $this->str[rand(0, count($arrString) - 1)];
        }

        return $name;
    }

    /**
     * create a sample email faker
     *
     * @param integer $length
     * @return string
     */
    private function generateEmail(int $length = 15)
    {
        $postEmail = $this->generateName($length);

        return $postEmail . '@' . 'gmail.com';
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
        $user->setFirstName($this->generateName(7));

        // create lastname
        $user->setLastName($this->generateName(9));

        // create email
        $user->setEmail($this->generateEmail());

        // create role basic 
        $user->setRoles(['ROLE_AUTH']);

        // create name with first name and lastname
        $user->setName($user->getFirstName() . ' ' . $user->getLastName());

        // create password
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);

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
        $user->setFirstName('john');

        // create lastname
        $user->setLastName('haimez');

        // create email
        $user->setEmail('haimezjohn@gmail.com');

        // create role basic 
        $user->setRoles(['ROLE_ROOT']);

        // create name with first name and lastname
        $user->setName($user->getFirstName() . ' ' . $user->getLastName());

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
        $user->setFirstName($firstName);

        // create lastname
        $user->setLastName($lastName);

        // create email
        $user->setEmail($email);

        // create role basic 
        $user->setRoles($roles);

        // create name with first name and lastname
        $user->setName($user->getFirstName() . ' ' . $user->getLastName());

        // create password
        $password = $this->hasher->hashPassword($user, 'password');
        $user->setPassword($password);

        $manager->persist($user);
        $manager->flush();
    }
}
